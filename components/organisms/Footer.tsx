import Typography from "components/atoms/Typography";
import Link from "next/link";
import { Linkedin as LinkedinIcon, GitHub as GitHubIcon } from "react-feather";

export const Footer = () => (
  <footer className="flex flex-col items-center p-14 md:py-6">
    <Typography variant="xs">
      <a
        className="hover:underline decoration-pink-400 decoration-2 underline-offset-4"
        href="mailto:luka.usalj@gmail.com"
        draggable={false}
      >
        luka.usalj@gmail.com
      </a>
    </Typography>
  </footer>
);
