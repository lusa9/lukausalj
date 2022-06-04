import { NavLink, NavLinkProps } from "components/molecules/NavLink";
import { useRouter } from "next/router";

const homePage: NavLinkProps = {
  href: "/",
  label: "Home",
};

const otherPages: NavLinkProps[] = [];

export const Navigation = () => {
  const { pathname } = useRouter();
  return (
    <nav className="flex gap-6">
      {[homePage, ...otherPages].map((page) => (
        <NavLink key={page.label} active={pathname === page.href} {...page} />
      ))}
    </nav>
  );
};
