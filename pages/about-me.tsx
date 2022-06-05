import Typography from "components/atoms/Typography";
import Head from "next/head";
import cn from "classnames";

export default () => (
  <>
    <Head>
      <title>Luka Ušalj - About Me</title>
    </Head>
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
