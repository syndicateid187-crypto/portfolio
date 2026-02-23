import { Briefcase, GraduationCap } from "lucide-react";
import { experience } from "../data/mock";

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Experience & Education
                    </h2>
                    <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        My professional journey and educational background that shaped my skills.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gray-800"></div>

                    <div className="space-y-12">
                        {experience.map((item, index) => (
                            <div key={index} className={`relative flex items-center justify-between md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} flex-col`}>
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-gray-900 z-10 hidden md:block"></div>

                                {/* Content Card */}
                                <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'} pl-8 md:pl-0`}>
                                    <div className="p-6 bg-gray-900 border border-gray-800 rounded-2xl hover:border-gray-700 transition-all">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 bg-gray-800 rounded-lg text-white">
                                                {item.isWork ? <Briefcase size={20} /> : <GraduationCap size={20} />}
                                            </div>
                                            <span className="text-sm font-medium text-gray-400">{item.period}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                                        <h4 className="text-gray-400 font-medium mb-3">{item.company}</h4>
                                        <p className="text-gray-500 leading-relaxed text-sm">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
