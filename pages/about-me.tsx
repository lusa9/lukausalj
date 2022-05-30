import Typography from "components/atoms/Typography";
import type { NextPage } from "next";
import Head from "next/head";

const AboutMe: NextPage = () => (
  <>
    <Head>
      <title>Luka Ušalj - About Me</title>
    </Head>
    <Typography variant="h1" as="h3">
      About Me
    </Typography>
  </>
);

export default AboutMe;
