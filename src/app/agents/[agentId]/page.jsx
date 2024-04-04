"use client";

import AgentHeader from "@/components/AgentHeader";
import SelectAgent from "@/components/SelectAgent";
import { useEffect, useState } from "react";
import { getAgent } from "@/utils/api";

const AgentsDetail = ({ params }) => {
  const [agents, setAgents] = useState([]);

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

  console.log(agents[agentIndex]);

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
