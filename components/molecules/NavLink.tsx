import cn from "classnames";
import Link from "next/link";
import Typography from "../atoms/Typography";

export interface NavLinkProps {
  href: string;
  label: string;
  active?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, label, active }) => {
  const externalLink = href.includes("http");
  return (
    <Link {...{ href }}>
      <a
        className={cn(
          "hover:underline decoration-pink-500 decoration-2 underline-offset-8",
          active && "underline"
        )}
        {...(externalLink && {
          target: "_blank",
        })}
      >
        <Typography variant="sm" onAllViewPorts>
          {label}
        </Typography>
      </a>
    </Link>
  );
};
