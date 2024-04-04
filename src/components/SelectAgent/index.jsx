"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getAgent } from "@/utils/api";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

const SelectAgent = ({ link = "", agentName }) => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    getAgent().then((data) => {
      setAgents(data);
    });
  }, []);

  // Parallax Animation
  let { scrollYProgress } = useScroll();
  const scaleH1 = useSpring(scrollYProgress, {
    stiffness: 50,
    mass: 0.3,
  });
  let yWar = useTransform(scaleH1, [0, 1], ["0%", "70%"]);

  return (
    <>
      <div className="w-full p-8 pb-0 lg:px-40 lg:pt-32 text-black">
        <h1
          className={`${oswald.className} font-black text-4xl md:text-8xl mb-10`}
        >
          SELECT AN AGENT
        </h1>
      </div>
      <div className="h-full w-full p-8 pt-0 lg:px-40 lg:pb-32 text-black mb-20 flex flex-col items-center relative">
        <motion.h1
          className="text-color-white font-black text-[270px] absolute top-[-30rem] right-36 hidden lg:block drop-shadow-[0_0_2px_rgba(0,0,0,0.1)] -z-10 uppercase"
          style={{ y: yWar }}
        >
          {agentName ? agentName : "VALORANT"}
        </motion.h1>
        <div className="w-fit grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-12 gap-0">
          {agents &&
            agents.map((agent, i) => {
              if (agent.isPlayableCharacter)
                return (
                  <Link
                    href={`/agents/${agent.uuid}`}
                    key={i}
                    className={`border-2 border-stone-400 p-0 w-fit hover:bg-stone-300 transition-all ${
                      link !== "" && agent.uuid === link
                        ? "bg-stone-300 border-color-primary"
                        : ""
                    }`}
                  >
                    <Image
                      className={`${
                        link !== "" && agent.uuid === link
                          ? "brightness-50"
                          : ""
                      } `}
                      src={agent.displayIcon}
                      alt={agent.displayName}
                      key={i}
                      width={120}
                      height={120}
                    />
                  </Link>
                );
            })}
        </div>
      </div>
    </>
  );
};

export default SelectAgent;
