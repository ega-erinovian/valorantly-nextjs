"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ParallaxText = ({ text }) => {
  // Parallax Animation
  let { scrollYProgress } = useScroll();
  const scaleH1 = useSpring(scrollYProgress, {
    stiffness: 50,
    mass: 0.3,
  });
  let y = useTransform(scaleH1, [0, 1], ["0%", "80%"]);

  return (
    <div>
      <motion.h1
        className="text-color-white font-black text-[270px] absolute top-[-10rem] left-0 hidden lg:block drop-shadow-[0_0_2px_rgba(0,0,0,0.1)] -z-10 uppercase leading-none text-end"
        style={{ y }}
      >
        {text}
      </motion.h1>
    </div>
  );
};

export default ParallaxText;
