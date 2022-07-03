import Typography from "components/atoms/Typography";
import type { NextPage } from "next";
import Head from "next/head";

const Front: NextPage = () => (
  <>
    <Head>
      <title>Luka Ušalj - Visit Card</title>
    </Head>
    <div className="flex flex-1 justify-center items-center tracking-[.2px]">
      <Typography variant="sm" noMargin>
        lukausalj.com
      </Typography>
    </div>
  </>
);

export default Front;
