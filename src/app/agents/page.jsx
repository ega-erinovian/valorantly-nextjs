"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function Page() {
  let { scrollYProgress } = useScroll();
  const scaleImg = useSpring(scrollYProgress, {
    stiffness: 50,
    mass: 0.3,
  });
  const scaleText = useSpring(scrollYProgress, {
    stiffness: 50,
    mass: 0.4,
  });
  let yImg = useTransform(scaleImg, [0, 1], ["20%", "0%"]);
  let yText = useTransform(scaleText, [0, 1], ["40%", "0%"]);

  return (
    <div className="h-[300vh] overflow-x-hidden">
      <header
        className="h-[605px] w-full bg-slate-600 relative lg:flex lg:justify-end items-center px-40 mb-20 bg-center bg-cover"
        style={{
          backgroundImage:
            "url(https://playvalorant.com/assets/images/agents-background.jpg)",
        }}
      >
        <motion.div
          className="absolute h-full w-[680px] flex justify-center lg:w-screen left-[-35%] lg:left-0"
          // ref={imageRef}
          style={{ y: yImg }}
        >
          <Image
            unoptimized
            src="https://playvalorant.com/static/agents-group-31d7ce5a3637e45d8b25d2fd03159e6c.png"
            width={1000}
            height={1000}
            alt="valorant-agents"
            className="h-full w-auto self-center"
          />
        </motion.div>
        <motion.div
          className="hidden lg:block w-full lg:w-1/4 text-color-white border-b-2 pb-16"
          // ref={textRef}
          style={{ y: yText }}
        >
          <p className="font-bold text-md mb-2">Find The Headcount</p>
          <p>
            Find more ways to plant the Spike and style on your enemies with
            scrappers, strategists, and hunters of every description.
          </p>
        </motion.div>
      </header>
      <div className="block lg:hidden w-full lg:w-1/4 text-black lg:mt-10 p-8">
        <p className="font-bold mb-8">
          Game tembak-menembak taktis berbasis karakter 5v5
        </p>
        <p>
          Find more ways to plant the Spike and style on your enemies with
          scrappers, strategists, and hunters of every description.
        </p>
      </div>
    </div>
  );
}
