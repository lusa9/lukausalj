import Typography from "components/atoms/Typography";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Header } from "components/organisms/Header";
import Link from "next/link";

const Home: NextPage = () => {
  const status = () => (
    <>
      re-enginering{" "}
      <Link href="curio.io">
        <a>curio.io</a>
      </Link>
    </>
  );
  const technologies = [
    "React.js",
    "Next.js",
    "Typescript",
    "CSS Modules",
    "Tailwind",
  ];
  return (
    <>
      <Head>
        <title>Luka Ušalj - Senior Frontend Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-14 my-4 h-screen flex flex-col justify-between">
        <div>
          <Header />
          <div className="flex justify-between mt-6">
            <div className="w-2/3">
              <Typography variant="h1">Senior Frontend Developer</Typography>
              <Typography variant="p" className="pr-10">
                I'm experienced in building web apps from scratch in fast paced
                agile environments. Currently re-engineering{" "}
                <Link href="curio.io">
                  <a className="underline decoration-pink-500 decoration-2 underline-offset-2">
                    curio.io
                  </a>
                </Link>
              </Typography>
            </div>
            <div className="mt-2 w-1/3 flex flex-col items-end">
              {technologies.map((technology) => (
                <Typography
                  key={technology}
                  variant="h3"
                  as="h1"
                  className="leading-none my-2 text-slate-300"
                >
                  {technology}
                </Typography>
              ))}
            </div>
          </div>
        </div>
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            © 2021 Luka Ušalj. All rights reserved.
          </a>
        </footer>
      </div>
    </>
  );
};

export default Home;
