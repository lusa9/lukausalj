import Link from "next/link";
import Typography from "../atoms/Typography";

export const NavLink = ({ page }: { page: string }) => (
  <Link href={page.toLowerCase().replace(/\s+/g, "-")}>
    <a className="hover:underline decoration-pink-500 decoration-2 underline-offset-8">
      <Typography variant="sm" onAllViewPorts>
        {page}
      </Typography>
    </a>
  </Link>
);
