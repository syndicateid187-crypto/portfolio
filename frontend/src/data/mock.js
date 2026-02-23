// Mock data for portfolio

export const personalInfo = {
  name: "Satyam",
  title: "Full Stack Developer",
  tagline: "Building Digital Solutions That Drive Business Growth",
  bio: "Passionate developer with expertise in creating modern web applications, SaaS platforms, and automation solutions. I help businesses establish their online presence and scale their operations through technology.",
  email: "satyam.multicomplex@gmail.com",
  phone: "+91 831 7733896",
  location: "New Delhi, India",
  resume: "/resume.pdf",
  social: {
    github: "https://github.com/satyam-dev",
    linkedin: "https://linkedin.com/in/satyam-dev",
    twitter: "https://twitter.com/satyam_dev",
    instagram: "https://instagram.com/satyam_dev"
  }
};

export const stats = [
  { label: "Projects Completed", value: 50, suffix: "+" },
  { label: "Happy Clients", value: 30, suffix: "+" },
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Technologies", value: 20, suffix: "+" }
];

export const projects = [
  {
    id: 1,
    title: "Business Website",
    category: "Web Development",
    description: "Modern, responsive business website with SEO optimization, contact forms, and CMS integration. Perfect for establishing professional online presence.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "/project1.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    category: "SaaS Platform",
    description: "Full-featured SaaS dashboard with user management, analytics, billing integration, and real-time data visualization for business insights.",
    technologies: ["React", "FastAPI", "PostgreSQL", "Chart.js"],
    image: "/project2.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    category: "E-Commerce",
    description: "Complete e-commerce solution with product management, shopping cart, payment gateway integration, and order tracking system.",
    technologies: ["React", "Node.js", "Stripe", "MongoDB"],
    image: "/project1.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 4,
    title: "Discord Bot Dashboard",
    category: "Automation",
    description: "Advanced Discord bot management dashboard with command configuration, analytics, moderation tools, and server statistics.",
    technologies: ["React", "Discord.js", "Express", "MongoDB"],
    image: "/project2.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  }
];

export const skills = [
  {
    category: "Frontend",
    items: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Redux"]
  },
  {
    category: "Backend",
    items: ["Node.js", "FastAPI", "Python", "Express", "RESTful APIs"]
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"]
  },
  {
    category: "Tools & Others",
    items: ["Git", "Docker", "AWS", "Vercel", "Netlify", "Figma"]
  }
];

export const services = [
  {
    title: "Website Development",
    description: "Custom, responsive websites that establish your professional online presence and attract customers.",
    icon: "Globe"
  },
  {
    title: "SaaS Development",
    description: "Scalable SaaS platforms with user management, billing, and analytics to grow your business.",
    icon: "Layers"
  },
  {
    title: "E-Commerce Solutions",
    description: "Complete online stores with payment integration and inventory management for seamless selling.",
    icon: "ShoppingCart"
  },
  {
    title: "Bot Development",
    description: "Custom Discord bots and automation tools to streamline your community management.",
    icon: "Bot"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Business Owner",
    company: "Kumar Enterprises",
    content: "Satyam created an amazing website for my business. The professional design and easy-to-use interface helped us get more customers online. Highly recommended!",
    rating: 5,
    image: "/avatar1.png"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Founder",
    company: "StyleHub",
    content: "The e-commerce platform built by Satyam transformed our business. Sales increased by 200% within 3 months. Outstanding work!",
    rating: 5,
    image: "/avatar2.png"
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Community Manager",
    company: "Gaming Community",
    content: "The Discord bot dashboard is exactly what we needed. Managing our 10K+ member server is now so much easier. Great job!",
    rating: 4.5,
    image: "/avatar3.png"
  }
];

export const experience = [
  {
    title: "Senior Full Stack Developer",
    company: "Digital Solutions Inc.",
    period: "2022 - Present",
    description: "Lead developer for multiple high-traffic SaaS applications. Managed a team of 5 developers and improved system performance by 40%.",
    isWork: true
  },
  {
    title: "Web Developer",
    company: "Tech Startups Hub",
    period: "2020 - 2022",
    description: "Developed and maintained various client websites using React and Node.js. Integrated multiple payment gateways and third-party APIs.",
    isWork: true
  },
  {
    title: "Bachelor of Technology in CS",
    company: "State Technical University",
    period: "2016 - 2020",
    description: "Specialized in Software Engineering and Artificial Intelligence. Graduated with First Class Honors.",
    isWork: false
  }
];
