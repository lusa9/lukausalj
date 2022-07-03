import { CoderImg } from "components/atoms/CoderImg";
import Typography from "components/atoms/Typography";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => (
  <div className="flex md:justify-between md:items-top flex-col md:flex-row h-full">
    <Typography
      variant="p"
      className="mx-4 sm:mx-8 md:-mr-12 text-center md:text-left lg:-mr-16"
    >
      A senior frontend developer, currently working with{" "}
      <Link href="https://curio.io/" target="_blank">
        <a
          className="text-pink-500 hover:underline decoration-pink-500 decoration-2 underline-offset-2"
          target="_blank"
        >
          Curio
        </a>
      </Link>{" "}
      team on re-engineering platform for streaming narrated audio content.
    </Typography>
    <CoderImg />
  </div>
);

export default Home;
