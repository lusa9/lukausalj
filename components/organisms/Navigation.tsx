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
      <NavLink
        label="My CV"
        href="https://docs.google.com/document/d/10pmTUmXnsYZ_7ql_NqyxiEk_qQqqiPPA_9x2Uy_Ikmw/edit?usp=sharing"
      />
    </nav>
  );
};
