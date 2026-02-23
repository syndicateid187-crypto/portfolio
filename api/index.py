from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Load .env if it exists (for local testing)
load_dotenv()

# MongoDB connection settings from environment variables
mongo_url = os.environ.get('MONGO_URL')
db_name = os.environ.get('DB_NAME', 'portfolio_db')

# Global database client and db references
client: Optional[AsyncIOMotorClient] = None
db = None
db_connected = False

async def connect_to_mongo():
    global client, db, db_connected
    if not mongo_url:
        logger.warning("MONGO_URL not found in environment variables.")
        return

    try:
        client = AsyncIOMotorClient(mongo_url, serverSelectionTimeoutMS=5000)
        await client.admin.command('ping')
        db = client[db_name]
        db_connected = True
        logger.info("Successfully connected to MongoDB!")
    except Exception as e:
        logger.error(f"Failed to connect to MongoDB: {str(e)}")
        db_connected = False

# Create the main app
app = FastAPI(title="Portfolio Backend API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    subject: str
    message: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ContactMessageCreate(BaseModel):
    name: str = Field(..., min_length=2)
    email: str = Field(..., pattern=r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")
    subject: str = Field(..., min_length=2)
    message: str = Field(..., min_length=2)

# Routes
@api_router.get("/")
@api_router.get("")
async def root():
    return {"message": "Portfolio API is running", "database_connected": db_connected}

@api_router.get("/health")
async def health_check():
    return {
        "status": "online",
        "database": "connected" if db_connected else "disconnected",
        "timestamp": datetime.now(timezone.utc).isoformat()
    }

@api_router.post("/contact", response_model=ContactMessage)
async def create_contact_message(input: ContactMessageCreate):
    if not db_connected:
        await connect_to_mongo()
        if not db_connected:
            raise HTTPException(status_code=503, detail="Database not available")

    try:
        msg_dict = input.model_dump()
        msg_obj = ContactMessage(**msg_dict)
        doc = msg_obj.model_dump()
        doc['timestamp'] = doc['timestamp'].isoformat()
        await db.contact_messages.insert_one(doc)
        return msg_obj
    except Exception as e:
        logger.error(f"Error saving contact message: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to save message")

@api_router.get("/contact", response_model=List[ContactMessage])
async def get_contact_messages():
    if not db_connected:
        await connect_to_mongo()
        if not db_connected:
            return []

    try:
        messages = await db.contact_messages.find({}, {"_id": 0}).to_list(100)
        for msg in messages:
            if isinstance(msg['timestamp'], str):
                msg['timestamp'] = datetime.fromisoformat(msg['timestamp'])
        return messages
    except Exception as e:
        logger.error(f"Error fetching contact messages: {str(e)}")
        return []

# Include the router
app.include_router(api_router)

# Middleware for CORS
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup_event():
    await connect_to_mongo()
