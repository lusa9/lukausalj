import Typography from "components/atoms/Typography";
import type { NextPage } from "next";
import Head from "next/head";

const AboutMe: NextPage = () => (
  <>
    <Head>
      <title>Luka Ušalj - About Me</title>
    </Head>
    <div className="md:flex md:gap-4">
      <img className="md:w-1/2 lg:w-2/3" src="pixel_perfect.svg" />
      <div className="mt-14 text-center md:mt-0 md:text-left">
        <Typography variant="h4">Pixel-perfect layouts</Typography>
        <Typography variant="p">
          Delivering something that is "good enough" was never an option for me.
          I strongly believe that the designs should be implemented one-on-one
          which sometimes required working overtime and studying CSS more
          deeply.
        </Typography>
      </div>
    </div>
  </>
);

export default AboutMe;
