import { NavLink, NavLinkProps } from "components/molecules/NavLink";
import { useRouter } from "next/router";

const pages: NavLinkProps[] = [
  {
    label: "My CV",
    href: "https://docs.google.com/document/d/10pmTUmXnsYZ_7ql_NqyxiEk_qQqqiPPA_9x2Uy_Ikmw/edit?usp=sharing",
  },
  {
    label: "Projects",
    href: "https://9.agency#projects",
  },
  {
    label: "Hire Me",
    href: "https://www.linkedin.com/in/lukausalj/",
  },
];

export const Navigation = () => {
  const { pathname } = useRouter();
  return (
    <nav className="flex gap-6">
      {pages.map((page) => (
        <NavLink key={page.label} active={pathname === page.href} {...page} />
      ))}
    </nav>
  );
};
