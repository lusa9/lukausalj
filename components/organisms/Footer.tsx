import Typography from "components/atoms/Typography";
import Link from "next/link";
import { Linkedin as LinkedinIcon, GitHub as GitHubIcon } from "react-feather";

export const Footer = () => (
  <footer className="p-14 md:p-14 flex flex-col items-center gap-5">
    <Typography variant="xs">
      <a
        className="hover:underline decoration-pink-500 decoration-2 underline-offset-4"
        href="mailto:luka.usalj@gmail.com"
        draggable={false}
      >
        luka.usalj@gmail.com
      </a>
    </Typography>

    <div className="flex gap-4">
      <Link href="https://www.linkedin.com/in/lukausalj/">
        <a target="_blank" draggable={false}>
          <LinkedinIcon />
        </a>
      </Link>
      <Link href="https://github.com/lusa9">
        <a target="_blank" draggable={false}>
          <GitHubIcon />
        </a>
      </Link>
    </div>
  </footer>
);
