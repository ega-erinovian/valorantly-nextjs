"use client";

import Image from "next/image";
import { Oswald } from "next/font/google";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import SelectAgent from "@/components/SelectAgent";
import AgentHeader from "@/components/AgentDetail/AgentHeader";

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
      <AgentHeader
        bgImg="https://playvalorant.com/assets/images/agents-background.jpg"
        agentImg="https://playvalorant.com/static/agents-group-31d7ce5a3637e45d8b25d2fd03159e6c.png"
      />
      <SelectAgent />
    </div>
  );
}
