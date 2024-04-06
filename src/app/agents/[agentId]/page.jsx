import AgentHeader from "@/components/AgentDetail/AgentHeader";
import SelectAgent from "@/components/SelectAgent";
import Image from "next/image";
import { Oswald } from "next/font/google";

import { getAgent } from "@/utils/api";
import { usePathname } from "next/navigation";
import AgentSkill from "@/components/AgentDetail/AgentSkill";
import ParallaxText from "@/components/AgentDetail/ParallaxText";

const oswald = Oswald({ subsets: ["latin"] });

export async function generateStaticParams() {
  const { data } = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/agents`
  ).then((res) => res.json());

  return data.map((item) => ({ agentId: item.uuid }));
}

const AgentsDetail = async ({ params: { agentId } }) => {
  const { data } = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/agents`
  ).then((res) => res.json());

  let index = data
    .map((agent) => {
      return agent.uuid;
    })
    .indexOf(agentId);

  if (data[index]) {
    return (
      <div className="h-full w-screen overflow-x-hidden">
        {/* HEADER */}
        <AgentHeader
          agentImg={data[index].fullPortrait}
          agentName={data[index].displayName}
          agentBio={data[index].description}
          roleIcon={data[index].role.displayIcon}
          agentRole={data[index].role.displayName}
          agentBg={data[index].background}
          agentColors={data[index].backgroundGradientColors}
        />
        <div className="w-full h-full py-32 px-8 lg:px-4 md:px-8 xl:py-40 xl:px-48 relative">
          <ParallaxText text="WE ARE VALORANT" />
          <div className="lg:flex lg:items-end lg:justify-between mb-10 lg:mb-20">
            <h1
              className={`${oswald.className} font-black text-6xl md:text-8xl xl:text-9xl`}
            >
              AGENT&apos;S ABILITIES
            </h1>
            {/* SUBTITLE */}
            <div className="hidden lg:block w-[15%] text-sm text-end text-color-primary border-b-4 border-color-primary pb-4">
              <p>VLRT AGNT</p>
              <p className="uppercase">
                CODE-ALIAS-{data[index].developerName}
              </p>
            </div>
          </div>
          {/* AGENT ABILITIES*/}
          <AgentSkill data={data[index].abilities} agentIndex={index} />
        </div>
        <SelectAgent link={agentId} agentName={data[index].displayName} />
      </div>
    );
  }
};

export default AgentsDetail;
