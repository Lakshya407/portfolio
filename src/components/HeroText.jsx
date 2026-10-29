import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Cloud", "DevOps", "Linux", "Docker"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
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
          Hi, we&apos;re the web-logic team
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A team building what&apos;s next
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
            Think<span className="text-aqua">.</span> Build
            <span className="text-aqua">.</span> Scale
            <span className="text-aqua">.</span>
          </motion.p>
          <motion.div
            className="flex gap-3 mt-6"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.2 }}
          >
            <a
              href="#work"
              className="px-5 py-2.5 text-sm font-medium rounded-full bg-gradient-to-r from-royal to-lavender hover:opacity-90 hover-animation"
            >
              View our work
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 text-sm font-medium rounded-full border border-white/15 text-neutral-200 hover:border-white/40 hover:text-white hover-animation"
            >
              Let&apos;s talk
            </a>
          </motion.div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col space-y-5 md:hidden">
        <motion.p
          className="text-3xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, we&apos;re the web-logic team
        </motion.p>
        <motion.p
          className="text-lg text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.1 }}
        >
          Building together
        </motion.p>
        <div>
          <motion.p
            className="text-4xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Together, we build
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-6xl"
            />
          </motion.div>
          <motion.p
            className="mt-3 text-2xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Think<span className="text-aqua">.</span> Build
            <span className="text-aqua">.</span> Scale
            <span className="text-aqua">.</span>
          </motion.p>
        </div>
        <motion.div
          className="flex justify-center gap-3"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2.2 }}
        >
          <a
            href="#work"
            className="px-5 py-2.5 text-sm font-medium rounded-full bg-gradient-to-r from-royal to-lavender"
          >
            View our work
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 text-sm font-medium rounded-full border border-white/15 text-neutral-200"
          >
            Let&apos;s talk
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroText;
