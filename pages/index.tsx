import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => (
  <div className="flex lg:justify-between lg:items-top flex-col lg:flex-row h-full gap-10">
    <div>
      <h1 className="text-7xl">Senior NextJS Developer</h1>
      <p className="mt-4">
        Author of{" "}
        <Link href="https://whatdo.in" target="_blank" rel="noopener">
          <a
            className="text-pink-500 hover:underline decoration-pink-500 decoration-2 underline-offset-2"
            target="_blank"
          >
            WhatDo
          </a>
        </Link>
        ,{" "}
        <Link href="https://wildstartups.com" target="_blank" rel="noopener">
          <a
            className="text-pink-500 hover:underline decoration-pink-500 decoration-2 underline-offset-2"
            target="_blank"
          >
            WildStartups
          </a>
        </Link>{" "}
        &{" "}
        <Link
          href="https://www.petsandsitters.com"
          target="_blank"
          rel="noopener"
        >
          <a
            className="text-pink-500 hover:underline decoration-pink-500 decoration-2 underline-offset-2"
            target="_blank"
          >
            Pets&Sitters
          </a>
        </Link>
        .
      </p>
    </div>
    <img
      className="absolute bottom-0 inset-x-0 sm:static opacity-10 sm:opacity-100 lg:w-4/5 pt-14 object-top object-contain	pointer-events-none select-none sm:scale-125"
      src="landing.svg"
      draggable={false}
    />
  </div>
);

export default Home;
