"use client";

import ParallaxText from "@/components/AgentDetail/ParallaxText";
import { agentsSkillData } from "@/utils/skillVid";
import Image from "next/image";
import { useState } from "react";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

const AgentSkill = ({ data, agentIndex }) => {
  const [skill, setSkill] = useState(0);
  return (
    <>
      {/* AGENT ABILITIES - CONTENT */}
      <div className="w-full xl:flex justify-between gap-10">
        {/* AGENT ABILITIES - CONTENT WRAPPER */}
        <div className="xl:w-1/2 mb-10">
          <div className="w-full flex justify-center">
            {/* ABILITIES WRAPPER */}
            <div className="w-full flex justify-between mb-10">
              {data.map((ability, index) => {
                if (ability.displayIcon !== null) {
                  return (
                    <button
                      key={index}
                      className={`w-16 h-16 md:w-32 md:h-32 lg:w-24 lg:h-24 p-2 flex justify-center items-center hover:border-none transition-all ${
                        data[skill].displayName === ability.displayName
                          ? "opacity-100 bg-color-primary brightness-100"
                          : "brightness-[40%] opacity-50 hover:bg-color-primary hover:brightness-100 hover:opacity-100 border-2 border-white"
                      }`}
                      onClick={() => setSkill(index)}
                    >
                      <Image
                        src={ability.displayIcon}
                        width={45}
                        height={45}
                        alt={ability.displayName}
                        className="w-[60%] h-[60%]"
                      />
                    </button>
                  );
                }
              })}
            </div>
          </div>
          <h3
            className={`${oswald.className} font-black text-4xl mb-4 uppercase`}
          >
            {data[skill].displayName}
          </h3>
          <p>{data[skill].description}</p>
        </div>
        {/* VIDEO CONTENT */}
        {agentsSkillData[agentIndex].skills[skill].link && (
          <div className="h-full xl:h-fit w-full lg:w-1/2 relative agent-vid">
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
    </>
  );
};

export default AgentSkill;
