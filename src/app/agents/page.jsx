"use client";

import Image from "next/image";
import { Oswald } from "next/font/google";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import SelectAgent from "@/components/SelectAgent";

const oswald = Oswald({ subsets: ["latin"] });

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
    <div className="h-full overflow-x-hidden">
      <header
        className="h-[605px] w-full bg-slate-600 relative flex flex-col lg:flex-row lg:justify-center items-center px-40 mb-20 bg-center bg-cover"
        style={{
          backgroundImage:
            "url(https://playvalorant.com/assets/images/agents-background.jpg)",
        }}
      >
        <motion.div
          className="absolute h-[600px] w-[700px] lg:w-full flex justify-center"
          style={{ y: yImg }}
        >
          <Image
            unoptimized
            src="https://playvalorant.com/static/agents-group-31d7ce5a3637e45d8b25d2fd03159e6c.png"
            width={1000}
            height={1000}
            alt="valorant-agents"
            className="w-fit h-full"
          />
        </motion.div>
        <motion.div
          className="hidden lg:flex w-screen text-color-white justify-end"
          // ref={textRef}
          style={{ y: yText }}
        >
          <div className="w-1/4 border-b-2 pb-16">
            <p className="font-bold text-md mb-2">Find The Headcount</p>
            <p>
              Find more ways to plant the Spike and style on your enemies with
              scrappers, strategists, and hunters of every description.
            </p>
          </div>
        </motion.div>
      </header>
      <div className="block lg:hidden w-full text-black p-8">
        <p className="font-bold mb-4">Find The Headcount</p>
        <p>
          Find more ways to plant the Spike and style on your enemies with
          scrappers, strategists, and hunters of every description.
        </p>
      </div>
      <SelectAgent />
    </div>
  );
}
