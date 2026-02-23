import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "./ui/button";
import { personalInfo } from "../data/mock";
import ParticlesBackground from "./ParticlesBackground";

const Hero = () => {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      <ParticlesBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-gray-400 text-lg">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold text-white">
                {personalInfo.name}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
                {personalInfo.title}
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                {personalInfo.tagline}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200"
                onClick={(e) => scrollToSection(e, "#contact")}
              >
                <Mail className="mr-2" size={20} />
                Get In Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black"
              >
                <Download className="mr-2" size={20} />
                Download CV
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors text-white"
              >
                <Github size={24} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors text-white"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors text-white"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
              <img
                src="/profile.jpg"
                alt="Satyam"
                className="relative w-full h-full object-cover object-top rounded-full border-4 border-gray-800 shadow-2xl z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
