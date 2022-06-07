import Typography from "components/atoms/Typography";
import Head from "next/head";
import cn from "classnames";

export default () => (
  <>
    <Head>
      <title>Luka Ušalj - About Me</title>
    </Head>
    <Typography variant="h2" as="h1" className="mb-8">
      <span className="text-pink-400">Who</span> am I
    </Typography>
    <Typography variant="p" className="mb-10 mr-8 sm:w-2/3">
      Senior frontend developer, working remotely from ☀️ Croatia. I'm
      experienced in building responsive web apps from scratch using React,
      Next.js, Typescript, CSS Modules and/or Tailwind.
      <span className="hidden md:inline">
        {" "}
        I deliver reusable code resistant to change requests using stateless
        functional components.
      </span>
    </Typography>
    {/* TODO: Prebaciti u zaseban obojani section */}
    <ul className="pl-2 pb-16 -mt-2 sm:-mt-20 -mb-12 sm:-mb-28 lg:-mb-36 flex flex-col gap-3 md:gap-4 lg:gap-5">
      {["React", "Next.js", "Typescript", "CSS Modules", "Tailwind"].map(
        (technology) => (
          <Typography
            variant="h3"
            key={technology}
            className="text-slate-400 font-thin text-right"
            noMargin
          >
            <li>{technology}</li>
          </Typography>
        )
      )}
    </ul>
    <Typography variant="h2" className="mb-20">
      How I Work
    </Typography>
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
