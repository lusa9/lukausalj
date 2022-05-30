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
  <div className="flex flex-col md:flex-row justify-between">
    <div className="md:w-2/3">
      <Typography variant="h1">Senior Frontend Developer</Typography>
      <Typography variant="p" className="sm:pr-12">
        I'm experienced in building web apps from scratch in fast paced agile
        environments. Currently re-engineering{" "}
        <Link href="curio.io">
          <a className="underline decoration-pink-500 decoration-2 underline-offset-2">
            curio.io
          </a>
        </Link>
      </Typography>
    </div>
    <div className="hidden md:mt-4 md:w-1/3 md:flex md:flex-col md:items-end">
      {technologies.map((technology) => (
        <Typography
          key={technology}
          variant="h5"
          as="h2"
          noMargin
          noLeading
          className="text-slate-300 my-1"
        >
          {technology}
        </Typography>
      ))}
    </div>
  </div>
);

export default Home;
