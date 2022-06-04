import "styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Header } from "components/organisms/Header";
import { Footer } from "components/organisms/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Luka Ušalj - Senior Frontend Developer</title>
        <meta
          name="description"
          content="Responsive web apps using React, Next.js, Typescript, CSS Modules and Tailwind."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="type" content="website" />
        <meta
          name="keywords"
          content="senior srontend developer, senior react developer, senior web developer, frontend developer, react developer, web developer, app developer, progressive, responsive, pwa"
        />
        <meta name="author" content="Luka Ušalj" />
      </Head>
      <div className="h-screen flex flex-col">
        <Header />
        <div className="flex flex-col flex-1 p-8 pb-0 md:p-14 md:mt-4">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
