import Link from "next/link";
import Typography from "../atoms/Typography";

export const NavLink = ({ page }: { page: string }) => (
  <Link href={page.toLowerCase().replace(/\s+/g, "-")}>
    <a>
      <Typography variant="p">{page}</Typography>
    </a>
  </Link>
);
