import React from "react";
import Link from "next/link";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

const HomeContent = ({
  title,
  subtitle,
  description,
  textColor,
  hoverColor,
}) => {
  return (
    <>
      <h1
        className={`${oswald.className} font-black text-8xl md:text-9xl mb-10 lg:mb-12 uppercase ${textColor}`}
      >
        {title}
      </h1>
      <h3
        className={`${oswald.className} font-black text-2xl mb-4 uppercase ${textColor}`}
      >
        {subtitle}
      </h3>
      <p className="lg:w-[80%]">{description}</p>
      <Link href={`/${title}`}>
        <button
          className={`w-full lg:w-1/2 h-fit bg-color-white hover:${hoverColor} text-color-secondary hover:text-color-white mt-6 lg:mt-12 py-4 font-bold text-lg lg:text-xl border-2 border-color-secondary capitalize`}
        >
          See All {title}
        </button>
      </Link>
    </>
  );
};

export default HomeContent;
