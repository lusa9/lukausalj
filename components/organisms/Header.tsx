import { Logo } from "components/atoms/Logo";
import { Navigation } from "components/organisms/Navigation";

export const Header = () => (
  <header className="px-4 py-1 flex">
    <Logo />
    <Navigation />
  </header>
);
