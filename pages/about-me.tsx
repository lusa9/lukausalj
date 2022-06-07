import Typography from "components/atoms/Typography";
import Head from "next/head";
import cn from "classnames";

export default () => (
  <>
    <Head>
      <title>Luka Ušalj - About Me</title>
    </Head>
    <div className="flex justify-between">
      <div>
        <Typography variant="h2" as="h1" className="mb-8">
          Luka Ušalj
        </Typography>
        <Typography variant="p" className="mb-32 pr-32">
          Senior frontend developer, working remotely from ☀️ Croatia. I'm
          experienced in building responsive web apps from scratch using React,
          Next.js, Typescript, CSS Modules and/or Tailwind. I deliver reusable
          code resistant to change requests using stateless functional
          components.
        </Typography>
      </div>
      <div className="flex flex-col items-end gap-3 sm:pt-6 md:pt-5 lg:pt-3">
        {["React", "Next.js", "Typescript", "CSS Modules", "Tailwind"].map(
          (technology) => (
            <Typography
              key={technology}
              variant="h4"
              as="h1"
              className="text-slate-400 text-right whitespace-nowrap font-extralight"
              noMargin
            >
              {technology}
            </Typography>
          )
        )}
      </div>
    </div>
    <Typography variant="h1" className="mb-28">
      How I Work
    </Typography>
    <Section
      className="md:gap-8 lg:gap-4"
      image={{
        src: "pixel_perfect.svg",
        className: "md:w-1/2 lg:w-2/3",
      }}
      title="Pixel-perfect layouts"
      description='Delivering something that is "good enough" was never an option for me. I
        strongly believe that the designs should be implemented one-on-one which
        sometimes required working overtime and studying CSS more deeply.'
    />
    <Section
      className="md:gap-16"
      image={{
        src: "wireframing.svg",
        className: "md:w-1/2 lg:w-3/5",
      }}
      title="No easy routes      "
      description="When making decisions take no shortcuts since it creates technical debt which leads to rewriting the whole project. Building software in the right way results with the codebase that's more maintainable and it's easier for other developers to jump in!"
      reversed
    />
  </>
);

const Section: React.FC<{
  className?: string;
  image: {
    src: string;
    className?: string;
  };
  title: string;
  description: string;
  reversed?: boolean;
}> = ({ image, title, description, reversed, className }) => (
  <div className={cn("md:flex", reversed && "flex-row-reverse", className)}>
    <img className={cn("mb-28", image.className)} src={image.src} />
    <div className="mt-14 text-center md:mt-0 md:text-left md:pt-2">
      <Typography variant="h4">{title}</Typography>
      <Typography variant="p">{description}</Typography>
    </div>
  </div>
);
