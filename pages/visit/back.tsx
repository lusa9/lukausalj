import Typography from "components/atoms/Typography";
import type { NextPage } from "next";
import Head from "next/head";

const Back: NextPage = () => (
  <>
    <Head>
      <title>Luka Ušalj - Visit Card</title>
    </Head>
    <div className="flex justify-between">
      <div className="py-7 flex flex-col justify-between">
        <Typography variant="p" noMargin className="mb-3 font-bold">
          Frontend.
        </Typography>
        <div>
          {["React", "NextJS", "PWA"].map((technology) => (
            <Typography key={technology} variant="sm">
              {technology}
            </Typography>
          ))}
        </div>
      </div>
      <img
        className="h-3/4 absolute bottom-2 right-2 object-top object-contain pointer-events-none select-none"
        src="/coder.svg"
        draggable={false}
      />
    </div>
  </>
);

export default Back;
