import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { myProjects } from "../constants"; 
import { motion, AnimatePresence } from "motion/react";

const ProjectDesc = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Ambil data berdasarkan ID URL
  const project = myProjects.find((p) => p.id === parseInt(id));

  const slides = project?.images?.length ? project.images : [project?.image];

  useEffect(() => {
    if (!slides || slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [slides]);

  if (!project)
    return <div className="text-white text-center pt-20">Loading...</div>;

  return (
    <section className="w-full min-h-screen bg-black-100 text-white pb-20 pt-14">
      <div className="relative w-full h-[60vh] md:h-[75vh] bg-neutral-900 overflow-hidden">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-8 left-8 z-30 px-4 py-2 bg-black/40 backdrop-blur-md rounded-lg border border-white/10 hover:bg-white/10 hover:text-black/70 cursor-pointer transition-all flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M5 12l4 4" />
            <path d="M5 12l4 -4" />
          </svg>
          <span>Back</span>
        </button>

        {/* Image */}
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={slides[currentSlide]}
            alt="Project Slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover object-top rounded-2xl"
          />
        </AnimatePresence>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === idx ? "w-8 bg-white" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Gradient Overlay bawah */}
        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black-100 to-transparent z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-5 mt-10 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {project.title}
          </h1>

          <p className="text-xl text-neutral-300 leading-relaxed">
            {project.description}
          </p>

          <div className="space-y-4 pt-5">
            <h3 className="text-2xl font-semibold text-white">
              Project Highlights
            </h3>
            <ul className="space-y-3">
              {project.subDescription.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-neutral-400">
                  <span className="text-blue-500 mt-1">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:col-span-1 h-fit bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm sticky top-10">
          <h3 className="text-lg font-semibold mb-4 text-white">
            Technologies
          </h3>
          <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.map((tag) => (
              <div
                key={tag.id}
                className="flex items-center gap-2 bg-black/50 px-3 py-2 rounded-lg border border-white/5"
              >
                <img src={tag.path} alt={tag.name} className="w-5 h-5" />
                <span className="text-sm text-gray-300">{tag.name}</span>
              </div>
            ))}
          </div>

          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              className="flex justify-center items-center w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-neutral-200 transition-all gap-2"
            >
              Visit Live Site{" "}
              <img src="/assets/arrow-up.svg" className="w-4 h-4" />
            </a>
          ) : (
            <div className="text-center text-gray-500 py-2 border border-dashed border-gray-700 rounded-xl">
              Live Demo Not Available
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectDesc;