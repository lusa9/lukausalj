import { Logo } from "components/atoms/Logo";
import { Navigation } from "components/organisms/Navigation";

export const Header = () => (
  <header className="mx-2 my-1 flex justify-between">
    <Logo />
    <Navigation />
  </header>
);
