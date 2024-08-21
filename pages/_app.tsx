import "styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Header } from "components/organisms/Header";
import { Footer } from "components/organisms/Footer";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <Head>
        <title>Luka Ušalj - Senior NextJS Developer</title>
        <meta
          name="description"
          content="High-Performance web apps using React & NextJS. Ping me if you're in demand for Senior Frontend Developer or Senior Fullstack Developer."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="type" content="website" />
        <meta
          name="keywords"
          content="senior frontend developer, senior nextjs developer, lead nextjs developer, lead frontend developer, senior react developer, lead react developer, senior fullstack developer, lead fullstack developer"
        />
        <meta name="author" content="Luka Ušalj" />
      </Head>
      <div className="h-[100svh] flex flex-col">
        <Header />
        <div className="flex flex-col flex-1 p-8 pb-0 md:p-14">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
