export const getAgent = async () => {
  const responseAgent = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/agents`
  );
  const agents = await responseAgent.json();
  return agents.data;
};
