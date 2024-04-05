"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

const AgentHeader = ({
  bgImg = "",
  agentImg,
  agentName,
  agentBio,
  roleIcon,
  agentRole,
  agentBg,
  agentColors,
}) => {
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
  let yText = useTransform(scaleText, [0, 1], ["10%", "-50%"]);

  return (
    <>
      <header
        className={`h-[605px] w-full bg-color-secondary relative flex flex-col lg:flex-row lg:justify-center items-center px-40 mb-20 bg-center bg-cover ${
          bgImg === "" && "agent-page"
        }`}
        style={{
          backgroundImage: bgImg
            ? `url(${bgImg})`
            : `linear-gradient(120deg , #${agentColors[1]}, #${agentColors[2]}, #${agentColors[3]})`,
        }}
      >
        <div
          className="absolute lg:left-10 h-full w-[572px] md:w-[600px] lg:w-[596px] bg-[length:100%] bg-center opacity-15"
          style={{ backgroundImage: `url(${agentBg})` }}
        ></div>
        <motion.div
          className="absolute h-[600px] w-[700px] -top-10 lg:w-full flex justify-center"
          style={{ y: yImg }}
        >
          <Image
            unoptimized
            src={`${agentImg}`}
            width={1000}
            height={1000}
            alt="valorant-agents"
            className="w-fit h-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.35)]"
          />
        </motion.div>
        <motion.div
          className="hidden lg:flex w-screen text-color-white justify-end"
          style={{ y: yText }}
        >
          <div className="w-1/4 border-b-2 pb-12">
            {agentName ? (
              <>
                <h3
                  className={`${oswald.className} font-bold text-6xl mb-5 uppercase`}
                >
                  {agentName}
                </h3>
                <p className="font-bold text-md mb-2"># Biography</p>
                <p className="mb-3 text-sm">{agentBio}</p>
                <p className="font-bold text-md mb-2"># Role</p>
                <div className="w-full flex items-center gap-4">
                  <Image
                    src={roleIcon}
                    width={30}
                    height={30}
                    alt="Role Icon"
                    className="w-fit h-fit"
                  />
                  <h3
                    className={`${oswald.className} font-bold text-4xl uppercase`}
                  >
                    {agentRole}
                  </h3>
                </div>
              </>
            ) : (
              <>
                <p className="font-bold text-md mb-2">Find The Headcount</p>
                <p>
                  Find more ways to plant the Spike and style on your enemies
                  with scrappers, strategists, and hunters of every description.
                </p>
              </>
            )}
          </div>
        </motion.div>
      </header>
    </>
  );
};

export default AgentHeader;
