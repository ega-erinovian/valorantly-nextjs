import React from "react";
import Link from "next/link";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

const HomeContent = ({ title, subtitle, description }) => {
  return (
    <>
      <h1
        className={`${
          oswald.className
        } font-black text-8xl md:text-9xl mb-10 lg:mb-12 uppercase ${
          title === "agents"
            ? "hover:text-color-white"
            : "hover:text-color-secondary"
        }`}
      >
        {title}
      </h1>
      <h3
        className={`${oswald.className} font-black text-2xl mb-4 uppercase ${
          title === "agents"
            ? "hover:text-color-white"
            : "hover:text-color-secondary"
        }`}
      >
        {subtitle}
      </h3>
      <p className="lg:w-[80%]">{description}</p>
      <Link href={`/${title}`}>
        <button
          className={`relative group px-8 h-14 before:absolute before:inset-0 before:scale-x-0 before:origin-right before:transition before:duration-300 hover:before:scale-x-100 hover:before:origin-left mt-4 lg:mt-10  ${
            title === "agents"
              ? "text-color-secondary bg-color-white before:bg-color-secondary"
              : "text-color-white bg-color-primary before:bg-color-secondary"
          }  hover:text-color-white`}
        >
          <span className="relative uppercase font-bold text-sm lg:text-md">
            See All {title}
          </span>
        </button>
      </Link>
    </>
  );
};

export default HomeContent;
