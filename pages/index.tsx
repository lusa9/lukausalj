import Typography from "components/atoms/Typography";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => (
  <div className="flex md:justify-between md:items-top flex-col md:flex-row h-full">
    <Typography
      variant="p"
      className="mx-4 sm:mx-8 md:-mr-12 text-center md:text-left lg:-mr-16"
    >
      Senior Frontend Developer. Organically growing{" "}
      <Link href="https://whatdo.in" target="_blank">
        <a
          className="text-pink-500 hover:underline decoration-pink-500 decoration-2 underline-offset-2"
          target="_blank"
        >
          WhatDo
        </a>
      </Link>
      .
      <br />
      Founder of{" "}
      <Link href="https://9.agency" target="_blank">
        <a
          className="text-pink-500 hover:underline decoration-pink-500 decoration-2 underline-offset-2"
          target="_blank"
        >
          9.agency
        </a>
      </Link>
    </Typography>

    <img
      className="md:w-3/5 lg:w-2/3 pt-14 md:pt-0 object-top	 object-contain	pointer-events-none select-none"
      src="landing.svg"
      draggable={false}
    />
  </div>
);

export default Home;
