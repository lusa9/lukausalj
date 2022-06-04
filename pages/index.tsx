import Typography from "components/atoms/Typography";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => (
  <div className="md:flex md:justify-between">
    <Typography variant="p" className="lg:pr-8">
      Currently working with{" "}
      <Link href="https://curio.io/" target="_blank">
        <a
          className="text-pink-500 hover:underline decoration-pink-500 decoration-2 underline-offset-2"
          target="_blank"
        >
          Curio
        </a>
      </Link>{" "}
      team on re-engineering their platform for streaming narrated audio
      content.
    </Typography>
    <img className="md:w-3/5 lg:w-2/3 pt-14 md:pt-0" src="landing.svg" />
  </div>
);

export default Home;
