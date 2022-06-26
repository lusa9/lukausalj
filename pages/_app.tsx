import "styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Header } from "components/organisms/Header";
import { Footer } from "components/organisms/Footer";
import { useLayoutEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [height, setHeight] = useState(0);
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
          content="luka usalj, luka ušalj, senior frontend developer, senior react developer, senior web developer, senior nextjs developer, senior pwa developer, frontend developer, react developer, web developer, nextjs developer, pwa developer"
        />
        <meta name="author" content="Luka Ušalj" />
      </Head>
      <div className="h-screen flex flex-col" style={{ height }}>
        <Header />
        <div className="flex flex-col flex-1 p-8 pb-0 md:p-14 md:pt-4">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
