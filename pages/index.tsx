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
      team on re-engineering platform for streaming narrated audio
      content.
    </Typography>

    <img
      className="md:w-3/5 lg:w-2/3 pt-14 md:pt-0 object-top	 object-contain	pointer-events-none select-none"
      src="landing.svg"
      draggable={false}
    />
  </div>
);

export default Home;
