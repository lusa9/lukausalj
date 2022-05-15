import { NavLink } from "components/molecules/NavLink";
import { useMemo } from "react";

export const Navigation = () => {
  const pages = useMemo(() => ["About Me", "Portfolio"], []);
  return (
    <nav className="flex gap-1">
      {pages.map((page) => (
        <NavLink key={page} {...{ page }} />
      ))}
    </nav>
  );
};
