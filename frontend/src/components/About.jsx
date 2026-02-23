import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { personalInfo, stats } from "../data/mock";

const CountUp = ({ end, duration = 2000, inView, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (!inView) return;

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = timestamp - startTimeRef.current;
      const percentage = Math.min(progress / duration, 1);

      countRef.current = Math.floor(end * percentage);
      setCount(countRef.current);

      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-gray-800 shadow-xl group">
              <img
                src="/profile.jpg"
                alt="About"
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">{personalInfo.name}</h3>
            <p className="text-xl text-gray-400 font-medium">{personalInfo.title}</p>
            <p className="text-gray-400 leading-relaxed">
              {personalInfo.bio}
            </p>

            <div className="pt-6">
              <h4 className="text-xl font-semibold text-white mb-4">Quick Facts</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-gray-400 w-32">Email:</span>
                  <span className="text-white">{personalInfo.email}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-400 w-32">Phone:</span>
                  <span className="text-white">{personalInfo.phone}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-400 w-32">Location:</span>
                  <span className="text-white">{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div ref={ref} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-800 rounded-xl hover:bg-gray-750 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <CountUp end={stat.value} inView={inView} suffix={stat.suffix} />
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
