"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Page() {
  const imageRef = useRef();
  const scrollYProgressImage = useScroll({ target: imageRef }).scrollYProgress;
  const scaleImg = useSpring(scrollYProgressImage, {
    stiffness: 125,
    mass: 0.25,
  });
  const y1 = useTransform(scaleImg, [0, 2], [-60, 60]);

  const textRef = useRef();
  const scrollYProgressText = useScroll({ target: textRef }).scrollYProgress;
  const scaleText = useSpring(scrollYProgressText, {
    stiffness: 125,
    mass: 0.25,
  });
  const y2 = useTransform(scaleText, [0, 1], [-150, 150]);

  return (
    <div className="h-full overflow-x-hidden">
      <header
        className="h-[75vh] w-full bg-slate-600 relative lg:flex lg:justify-end items-center px-40 mb-40"
        style={{
          backgroundImage:
            "url(https://playvalorant.com/assets/images/agents-background.jpg)",
        }}
      >
        <motion.div
          className="absolute h-full w-[170vw] flex justify-center lg:w-screen top-36 left-[-35vw] lg:left-0"
          ref={imageRef}
          style={{ y: y1 }}
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
          className="hidden lg:block w-full lg:w-1/4 text-color-white lg:mt-10 border-b-2 pb-16"
          ref={textRef}
          style={{ y: y2 }}
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
