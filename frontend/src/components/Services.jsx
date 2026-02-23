import { Globe, Layers, ShoppingCart, Bot } from "lucide-react";
import { services } from "../data/mock";

const iconMap = {
  Globe: Globe,
  Layers: Layers,
  ShoppingCart: ShoppingCart,
  Bot: Bot
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Services I Offer
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs, from concept to deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <div
                key={index}
                className="group p-8 bg-gray-900 border border-gray-800 rounded-2xl hover:border-white transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors duration-300 text-white">
                  <Icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
