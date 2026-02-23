import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { projects } from "../data/mock";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcase of my recent work - from business websites to complex SaaS platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-gray-900 border-gray-800 overflow-hidden group hover:border-gray-700 transition-all duration-300"
            >
              {/* Project Image Placeholder */}
              <div className="relative h-64 bg-gray-800 overflow-hidden">
                {project.image && project.image !== "/placeholder-project.jpg" ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="text-gray-500 text-sm font-medium">Project Screenshot</div>
                      <div className="text-gray-600 text-xs">1200x800px recommended</div>
                    </div>
                  </div>
                )}
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-white text-xl mb-2">
                      {project.title}
                    </CardTitle>
                    <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                      {project.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-gray-400 mb-4">
                  {project.description}
                </CardDescription>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-gray-700 text-gray-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
