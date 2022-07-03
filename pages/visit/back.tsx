import { CoderImg } from "components/atoms/CoderImg";
import type { NextPage } from "next";
import Head from "next/head";

const Back: NextPage = () => (
  <>
    <Head>
      <title>Luka Ušalj - Visit Card</title>
    </Head>
    <div className="flex justify-between">
      <div></div>
      <CoderImg />
    </div>
  </>
);

export default Back;
