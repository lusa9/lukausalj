import "styles/globals.css";
import cn from "classnames";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Header } from "components/organisms/Header";
import { Footer } from "components/organisms/Footer";
import { useLayoutEffect, useState } from "react";
import { useRouter } from "next/router";
import { isMountedOnClient } from "helpers";

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const [height, setHeight] = useState(0);
  isMountedOnClient &&
    useLayoutEffect(() => {
      setHeight(window.innerHeight);
    }, []);

  return (
    <>
      <Head>
        <title>Luka Ušalj - Senior Frontend Developer</title>
        <meta
          name="description"
          content="Responsive web apps using React, Next.js, Typescript, CSS Modules and Tailwind. Currently working with Curio team on re-engineering platform for streaming narrated audio content."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="type" content="website" />
        <meta
          name="keywords"
          content="luka usalj, luka ušalj, senior, frontend, developer, react, pwa, next, js, contract, freelance"
        />
        <meta name="author" content="Luka Ušalj" />
      </Head>
      <div className="h-screen flex flex-col" style={{ height }}>
        {!pathname.includes("/visit") && <Header />}
        <div
          className={cn(
            "flex flex-col flex-1 p-8 md:p-14 md:pt-4",
            !pathname.includes("/visit") && "pb-0"
          )}
        >
          <Component {...pageProps} />
        </div>
        {!pathname.includes("/visit") && <Footer />}
      </div>
    </>
  );
}

export default MyApp;
