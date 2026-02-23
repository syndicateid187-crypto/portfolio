import { useState } from "react";
import { Star, Quote, ChevronDown } from "lucide-react";
import { testimonials } from "../data/mock";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

const HalfStar = () => (
    <div className="relative">
        <Star size={16} className="text-white" />
        <div className="absolute inset-0 overflow-hidden w-[50%]">
            <Star size={16} className="fill-yellow-500 text-white shadow-sm" />
        </div>
    </div>
);

const Testimonials = () => {
    const [isVisible, setIsVisible] = useState(false);

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<Star key={`full-${i}`} size={16} className="fill-yellow-500 text-white" />);
        }
        if (hasHalfStar) {
            stars.push(<HalfStar key="half" />);
        }

        const remaining = 5 - Math.ceil(rating);
        for (let i = 0; i < remaining; i++) {
            stars.push(<Star key={`empty-${i}`} size={16} className="text-white" />);
        }

        return stars;
    };

    return (
        <section id="testimonials" className="py-20 bg-gray-900 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Client Feedback
                    </h2>
                    <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Don't just take my word for it. Here's what some of my clients have to say about working with me.
                    </p>
                </div>

                {!isVisible ? (
                    <div className="flex justify-center">
                        <Button
                            size="lg"
                            className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 h-auto group transition-all"
                            onClick={() => setIsVisible(true)}
                        >
                            Show Feedback
                            <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" />
                        </Button>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="bg-gray-800 p-8 rounded-2xl border border-gray-700 relative group hover:bg-gray-750 transition-all duration-300"
                            >
                                <Quote className="absolute top-6 right-8 text-gray-700 group-hover:text-white/20 transition-colors" size={40} />

                                <div className="flex gap-1 mb-6">
                                    {renderStars(testimonial.rating)}
                                </div>

                                <p className="text-gray-300 mb-8 italic leading-relaxed">
                                    "{testimonial.content}"
                                </p>

                                <div className="flex items-center gap-4">
                                    {testimonial.image && testimonial.image !== "/placeholder-avatar.jpg" ? (
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-12 h-12 rounded-full object-cover border-2 border-gray-700"
                                        />
                                    ) : (
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white font-bold">
                                            {testimonial.name.charAt(0)}
                                        </div>
                                    )}
                                    <div>
                                        <h4 className="text-white font-bold">{testimonial.name}</h4>
                                        <p className="text-gray-500 text-sm">
                                            {testimonial.role}, {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Testimonials;

