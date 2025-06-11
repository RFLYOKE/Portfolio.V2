import PropTypes from "prop-types";
import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";
import CV from "/assets/icons/cv.png";
import hire from "/assets/icons/hiring.png";
import project from "/assets/icons/project.png";
import Orb from "./Orb";

const HeroText = () => {
  const words = ["Frontend", "Fullstack", "UI/UX"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  const Button = (props) => {
    return (
      <a href={props.link}>
        <button
          type="button"
          className={props.className}
          data-bs-toggle="button"
          autoComplete="off"
        >
          {props.children}
        </button>
      </a>
    );
  };

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I'm Akmal Rafly Dzunurain
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Developer <br /> Dedicated to
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Developer
          </motion.p>
        </div>
        <motion.div
          className="flex items-center gap-6 mt-4"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8 }}
        >
          {/* Hire Me Button */}
          <Button link="#contact" className="group relative w-12 h-12">
            <div className="absolute inset-0 -z-10 w-full h-full scale-150">
              <Orb
                hoverIntensity={0.5}
                rotateOnHover={true}
                hue={0}
                forceHoverState={false}
              />
            </div>
            <img
              src={hire}
              alt="hire icon"
              className="w-12 h-12 z-10 bg-[#00FFC6] hover:bg-cyan-300 rounded-full p-1 shadow-md"
            />
            <span className="absolute top-14 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white text-sm font-medium px-4 py-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 scale-95 group-hover:scale-100 transition-all duration-300 ease-in-out text-center whitespace-nowrap">
              Hire Me
            </span>
          </Button>

          {/* Projects Button */}
          <Button link="#projects" className="group relative w-12 h-12">
            <div className="absolute inset-0 -z-10 w-full h-full scale-150">
              <Orb
                hoverIntensity={0.5}
                rotateOnHover={true}
                hue={0}
                forceHoverState={false}
              />
            </div>
            <img
              src={project}
              alt="project icon"
              className="w-12 h-12 z-10 bg-[#7F00FF] hover:bg-purple-400 rounded-full p-1 shadow-md"
            />
            <span className="absolute top-14 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white text-sm font-medium px-4 py-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 scale-95 group-hover:scale-100 transition-all duration-300 ease-in-out text-center whitespace-nowrap">
              Projects
            </span>
          </Button>

          {/* Download CV Button */}
          <a
            href="/CV-Terbaru.pdf"
            target="_blank"
            download={"CV-Terbaru.pdf"}
            className="group relative w-12 h-12"
          >
            <div className="absolute inset-0 -z-10 w-full h-full scale-150">
              <Orb
                hoverIntensity={0.5}
                rotateOnHover={true}
                hue={0}
                forceHoverState={false}
              />
            </div>
            <img
              src={CV}
              alt="cv icon"
              className="w-12 h-12 z-10 bg-[#FF8C00] hover:bg-orange-400 rounded-full p-1 shadow-md"
            />
            <span className="absolute top-14 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white text-sm font-medium px-4 py-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 scale-95 group-hover:scale-100 transition-all duration-300 ease-in-out text-center whitespace-nowrap">
              Download CV
            </span>
          </a>
        </motion.div>
      </div>
      {/* Mobile View */}
      <div className="flex- flex-col space-y-6 md:hidden">
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi,I'm Akmal Rafly Dzunurain
        </motion.p>
        <div>
          <motion.p
            className="text-5xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-7xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-black text-neutral300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Developer
          </motion.p>
        </div>
      </div>
    </div>
  );
};

HeroText.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  duration: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node,
  link: PropTypes.string,
};

export default HeroText;
