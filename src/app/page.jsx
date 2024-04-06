"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Oswald } from "next/font/google";
import HomeContent from "@/components/HomeContent";

const oswald = Oswald({ subsets: ["latin"] });

export default function Home() {
  // Parallax Animation
  let { scrollYProgress } = useScroll();
  const scaleText = useSpring(scrollYProgress, {
    stiffness: 50,
    mass: 0.3,
  });
  let y = useTransform(scaleText, [0, 1], ["30%", "5%"]);
  let yWar = useTransform(scaleText, [0, 1], ["0%", "70%"]);

  // Home Content Data
  const homeContent = [
    {
      title: "agents",
      subtitle: "CREATIVITY IS YOUR BEST WEAPON",
      description:
        "More than guns and bullets, you’ll choose an Agent armed with adaptive, swift, and lethal abilities that create opportunities to let your gunplay shine. No two Agents play alike, just as no two highlight reels will look the same.",
    },
    {
      title: "maps",
      subtitle: "FIGHT AROUND THE WORLD",
      description:
        "Each map is a playground to showcase your creative thinking. Purpose-built for team strategies, spectacular plays, and clutch moments. Make the play others will imitate for years to come.",
    },
  ];
  return (
    <div className="h-full w-screen">
      <header
        className="h-[640px] w-full bg-color-secondary flex items-end justify-center md:justify-start xl:items-center py-10 px-8 xl:px-40 xl:bg-left-bottom bg-center bg-cover"
        style={{
          backgroundImage:
            "url(https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt137525ab5e3632ba/65e7288afffe5a219d1cd6b8/Ep8a2_Defiance_Playval.com_Act_Overview_banner_3440x1020_Darkbg.jpg)",
        }}
      >
        <div className="xl:w-1/2">
          <p className="font-bold text-color-white text-xs md:text-sm lg:text-xl mb-4">
            A 5v5 character-based tactical shooter
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 690 98.9"
            className="fill-color-white w-70 xl:w-full"
          >
            <path d="M615.11 19.15h24.69l.08 75.59c0 .97.79 1.77 1.77 1.77l14.14-.01c.98 0 1.77-.79 1.77-1.77l-.08-75.58h30.96c.91 0 1.43-1.06.85-1.77l-10.6-13.26a4.68 4.68 0 0 0-3.65-1.76h-59.93c-.98 0-1.77.79-1.77 1.77v13.26c0 .96.79 1.76 1.77 1.76M19.25 94.75 91.67 4.13c.57-.71.06-1.77-.85-1.77H72.71c-1.42 0-2.77.65-3.65 1.76L17.68 68.4V4.12c0-.98-.79-1.77-1.77-1.77H1.77C.79 2.35 0 3.14 0 4.12v90.62c0 .98.79 1.77 1.77 1.77H15.6c1.42 0 2.76-.65 3.65-1.76m51.06 0 24.91-31.17 24.91 31.17a4.685 4.685 0 0 0 3.66 1.76h13.83c.98 0 1.77-.79 1.77-1.77V4.12c0-.97-.79-1.77-1.77-1.77h-11.6c-2.84 0-5.53 1.29-7.31 3.51L47.69 94.73c-.57.71-.06 1.77.85 1.77h18.11c1.43.01 2.77-.64 3.66-1.75m51.39-66.21v41.75l-16.68-20.87 16.68-20.88zm404.37 66.19L453.65 4.11A4.68 4.68 0 0 0 450 2.35h-13.84c-.98 0-1.77.79-1.77 1.77v90.62c0 .98.79 1.77 1.77 1.77h13.83c1.42 0 2.77-.65 3.65-1.76l24.91-31.17 24.91 31.17a4.68 4.68 0 0 0 3.65 1.76h18.11c.91 0 1.42-1.06.85-1.78m-57.33-45.31L452.05 70.3V28.54l16.69 20.88zM269.45 0c-27.3 0-49.43 22.13-49.43 49.43s22.13 49.43 49.43 49.43 49.43-22.13 49.43-49.43C318.89 22.13 296.75 0 269.45 0m0 82.06c-17.54 0-31.75-14.61-31.75-32.63 0-18.02 14.21-32.64 31.75-32.64S301.2 31.4 301.2 49.43c.01 18.02-14.21 32.63-31.75 32.63M583.38 4.12V68.4L532 4.11a4.68 4.68 0 0 0-3.65-1.76H514.5c-.97 0-1.77.79-1.77 1.77v43.67c0 1.06.36 2.09 1.03 2.92l14.71 18.41c.65.81 1.95.35 1.95-.68v-38l51.39 64.31a4.68 4.68 0 0 0 3.65 1.76h13.83c.98 0 1.77-.79 1.77-1.77V4.12c0-.97-.79-1.77-1.77-1.77h-14.14c-.98 0-1.77.8-1.77 1.77M410.62 23.76V4.12c0-.98-.79-1.77-1.77-1.77h-72.37c-.98 0-1.77.79-1.77 1.77v90.62c0 .98.79 1.77 1.77 1.77h14.14c.98 0 1.77-.79 1.77-1.77V19.16h40.55l-27.37 34.26c-.51.64-.51 1.56 0 2.21l31.27 39.13a4.68 4.68 0 0 0 3.65 1.76h18.11c.91 0 1.42-1.06.85-1.77l-32.14-40.21 22.28-27.84c.66-.85 1.03-1.88 1.03-2.94M162.39 96.51h41.96c1.42 0 2.77-.65 3.65-1.76l10.6-13.27c.57-.71.06-1.77-.85-1.77H178.3V4.12c0-.98-.79-1.77-1.77-1.77h-14.14c-.98 0-1.77.79-1.77 1.77v90.62c0 .97.8 1.77 1.77 1.77"></path>
          </svg>
        </div>
      </header>
      {/* ABOUT */}
      <div className="w-full h-full py-32 px-4 md:px-8 xl:py-40 xl:px-48">
        <div className="lg:flex lg:items-end lg:justify-between mb-4 lg:mb-20">
          <h1
            className={`${oswald.className} font-black text-7xl md:text-9xl mb-10`}
          >
            WE ARE VALORANT
          </h1>
          <div className="hidden lg:block w-[15%] text-sm text-end text-color-primary border-b-4 border-color-primary pb-4">
            <p>VLRT PR0T0C0L</p>
            <p>MR0C - SWD - BR4</p>
          </div>
        </div>
        {/* ABOUT - CONTENT */}
        <div className="w-full xl:flex justify-between gap-10">
          {/* TEXT CONTENT */}
          <div className="xl:w-1/2 mb-4">
            <h3
              className={`${oswald.className} font-black text-2xl mb-4 uppercase`}
            >
              DEFY THE LIMITS
            </h3>
            <p>
              Blend your style and experience on a global, competitive stage.
              You have 13 rounds to attack and defend your side using sharp
              gunplay and tactical abilities. And, with one life per-round,
              you&apos;ll need to think faster than your opponent if you want to
              survive. Take on foes across Competitive and Unranked modes as
              well as Deathmatch and Spike Rush.
            </p>
          </div>
          {/* VIDEO CONTENT */}
          <div className="xl:w-1/2 h-full relative gameplay-vid ">
            <video
              preload="true"
              loading="lazy"
              muted
              loop
              autoPlay
              className="w-full h-full"
              useref="video"
              src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltefd45731d8f9d9df/6217f2ea910a6c613c73168c/VALORANT_PLAY22_16x9_Target4_v005.mp4"
            />
          </div>
        </div>
      </div>
      {/* AGENTS */}
      <div className="w-screen h-full lg:h-[110vh] text-color-white overflow-hidden">
        <svg
          width="1920"
          height="77"
          viewBox="0 0 1920 77"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_606_85)">
            <path d="M-0.5 77.5V-0.5L129.5 77.5H-0.5Z" fill="#FF4655" />
          </g>
          <defs>
            <clipPath id="clip0_606_85">
              <rect width="1920" height="77" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <div className="w-full h-full lg:h-[80%] bg-color-primary lg:flex items-center justify-end relative py-20 lg:py-0">
          <motion.h1
            className="font-black text-[270px] absolute top-[-10rem] left-5 hidden lg:block drop-shadow-[0_0_2px_#c43a45] text-color-primary"
            style={{ y: yWar }}
          >
            RADIANT
          </motion.h1>
          <motion.div
            className="hidden lg:block absolute h-full w-fit lg:w-fit left-[-35vw] lg:left-[7vw]"
            style={{ y }}
          >
            <Image
              unoptimized
              src="https://playvalorant.com/static/agents-group-31d7ce5a3637e45d8b25d2fd03159e6c.png"
              width={1000}
              height={1000}
              alt="valorant-agents"
              className="h-full w-fit z-100"
            />
          </motion.div>
          <div className="lg:w-1/2 h-full flex flex-col lg:justify-center p-8 md:p-16 lg:p-8 z-10">
            <HomeContent
              title={homeContent[0].title}
              subtitle={homeContent[0].subtitle}
              description={homeContent[0].description}
            />
          </div>
        </div>
      </div>
      {/* MAPS */}
      <div className="w-screen h-full text-color-white overflow-hidden relative pt-20 lg:pb-48 lg:pt-10">
        {/* BACKGROUND TEXT */}
        <motion.h1
          className="font-black text-[270px] absolute top-[-15rem] right-36 hidden lg:block drop-shadow-[0_0_2px_rgba(0,0,0,0.1)] -z-10"
          style={{ y: yWar }}
        >
          KINGDOM
        </motion.h1>
        {/* CONTENT */}
        <div className="lg:w-1/2 h-full flex flex-col lg:justify-center p-8 md:p-16 lg:p-8 lg:ps-40 text-color-secondary">
          <HomeContent
            title={homeContent[1].title}
            subtitle={homeContent[1].subtitle}
            description={homeContent[1].description}
          />
        </div>
        {/* MAP IMAGE */}
        <Image
          src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt02c83424f7b41a97/6243813d8850ee0e8ea0ae56/maps-03ebbf2c074f13a65af1dba0c80f767e.png"
          width={900}
          height={880}
          alt="Valo Maps"
          className="lg:absolute bottom-0 right-[9px]"
        />
      </div>
    </div>
  );
}
