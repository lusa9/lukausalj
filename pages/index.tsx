import Typography from "components/atoms/Typography";
import { Footer } from "components/organisms/Footer";
import type { NextPage } from "next";
import Link from "next/link";

const technologies = [
  "React.js",
  "Next.js",
  "Typescript",
  "Tailwind",
  "CSS Modules",
];

const Home: NextPage = () => (
  <div className="md:flex md:justify-between">
    <div className="md:w-2/3">
      <Typography variant="h1" className="leading-tight">
        Senior Frontend Developer
      </Typography>
      <Typography variant="p" className="sm:pr-12">
        An advocate of pixel-perfect implementations and never taking shortcuts.
        <span className="hidden sm:inline">
          {" "}
          I'm experienced in building responsive web apps in fast paced
          environments.
          <br />
          <br />
        </span>{" "}
        At the moment, working with{" "}
        <Link href="https://curio.io/" target="_blank">
          <a
            className="text-pink-500 hover:underline decoration-pink-500 decoration-2 underline-offset-2"
            target="_blank"
          >
            curio
          </a>
        </Link>{" "}
        team on re-engineering their platform for streaming narrated audio
        content.
      </Typography>
    </div>
    <div className="hidden md:mt-12 md:w-1/3 md:flex md:flex-col md:items-end">
      {technologies.map((technology) => (
        <Typography
          key={technology}
          variant="h4"
          as="h2"
          noMargin
          noLeading
          className="text-slate-300 my-2 font-light"
        >
          {technology}
        </Typography>
      ))}
    </div>
  </div>
);

export default Home;
