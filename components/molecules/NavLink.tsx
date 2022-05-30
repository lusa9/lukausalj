import cn from "classnames";
import Link from "next/link";
import Typography from "../atoms/Typography";

export interface NavLinkProps {
  href: string;
  label: string;
  active?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, label, active }) => (
  <Link {...{ href }}>
    <a
      className={cn(
        "hover:underline decoration-pink-500 decoration-2 underline-offset-8",
        active && "underline"
      )}
    >
      <Typography variant="sm" onAllViewPorts>
        {label}
      </Typography>
    </a>
  </Link>
);
