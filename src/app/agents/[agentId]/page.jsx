"use client";

import AgentHeader from "@/components/AgentHeader";
import SelectAgent from "@/components/SelectAgent";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { getAgent } from "@/utils/api";
import { Oswald } from "next/font/google";
import { agentsSkillData } from "@/utils/skillVid";

const oswald = Oswald({ subsets: ["latin"] });

const AgentsDetail = ({ params }) => {
  const [agents, setAgents] = useState([]);
  const [skill, setSkill] = useState(0);

  useEffect(() => {
    getAgent().then((data) => {
      setAgents(data);
    });
  }, []);

  let agentIndex = agents
    .map((agent) => {
      return agent.uuid;
    })
    .indexOf(params.agentId);

  // Parallax Animation
  let { scrollYProgress } = useScroll();
  const scaleH1 = useSpring(scrollYProgress, {
    stiffness: 50,
    mass: 0.3,
  });
  let y = useTransform(scaleH1, [0, 1], ["0%", "80%"]);

  if (agents[agentIndex]) {
    return (
      <>
        <div className="h-full w-screen overflow-x-hidden">
          <AgentHeader
            agentImg={agents[agentIndex].fullPortrait}
            agentName={agents[agentIndex].displayName}
            agentBio={agents[agentIndex].description}
            roleIcon={agents[agentIndex].role.displayIcon}
            agentRole={agents[agentIndex].role.displayName}
            agentBg={agents[agentIndex].background}
            agentColors={agents[agentIndex].backgroundGradientColors}
          />
          {/* MOBILE AGENT DESCRIPTION */}
          <div className="w-full h-full py-32 px-8 lg:px-4 md:px-8 xl:py-40 xl:px-48 relative">
            <motion.h1
              className="text-color-white font-black text-[270px] absolute top-[-10rem] left-0 hidden lg:block drop-shadow-[0_0_2px_rgba(0,0,0,0.1)] -z-10 uppercase leading-none text-end"
              style={{ y }}
            >
              WE ARE VALORANT
            </motion.h1>
            <div className="lg:flex lg:items-end lg:justify-between mb-10 lg:mb-20">
              <h1
                className={`${oswald.className} font-black text-6xl md:text-8xl xl:text-9xl`}
              >
                AGENT&apos;S ABILITIES
              </h1>
              <div className="hidden lg:block w-[15%] text-sm text-end text-color-primary border-b-4 border-color-primary pb-4">
                <p>VLRT AGNT</p>
                <p className="uppercase">
                  CODE-ALIAS-{agents[agentIndex].developerName}
                </p>
              </div>
            </div>
            {/* ABOUT - CONTENT */}
            <div className="w-full xl:flex justify-between gap-10">
              {/* TEXT CONTENT */}
              <div className="xl:w-1/2 mb-10">
                <div className="w-full flex justify-center">
                  <div className="w-full flex justify-between mb-10">
                    {agents[agentIndex].abilities.map((data, index) => {
                      if (data.displayIcon !== null)
                        return (
                          <button
                            key={index}
                            className={`w-20 h-20 md:w-24 md:h-24 border-2 border-white p-2 opacity-50 brightness-[40%] flex justify-center items-center hover:bg-color-primary hover:brightness-100 hover:opacity-100 hover:border-none transition-all ${
                              agents[agentIndex].abilities[skill]
                                .displayName === data.displayName
                                ? "brightness-10 opacity-100"
                                : ""
                            }`}
                            onClick={() => setSkill(index)}
                          >
                            <Image
                              src={data.displayIcon}
                              width={45}
                              height={45}
                              alt={data.displayName}
                            />
                          </button>
                        );
                    })}
                  </div>
                </div>
                <h3
                  className={`${oswald.className} font-black text-4xl mb-4 uppercase`}
                >
                  {agents[agentIndex].abilities[skill].displayName}
                </h3>
                <p>{agents[agentIndex].abilities[skill].description}</p>
              </div>
              {/* VIDEO CONTENT */}
              {agentsSkillData[agentIndex].skills[skill].link && (
                <div className="w-full lg:w-1/2 relative agent-vid">
                  <video
                    preload="true"
                    loading="lazy"
                    muted
                    loop
                    autoPlay
                    className="w-full h-full"
                    useref="video"
                    src={agentsSkillData[agentIndex].skills[skill].link}
                  />
                </div>
              )}
            </div>
          </div>
          <SelectAgent
            link={params.agentId}
            agentName={agents[agentIndex].displayName}
          />
        </div>
      </>
    );
  }
};

export default AgentsDetail;
