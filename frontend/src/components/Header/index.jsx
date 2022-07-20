import Logo from "@components/Logo";
import Nav from "@components/Nav";
import SHeader from "./style";

export default function Header() {
  return (
    <SHeader>
      <Logo />
      <Nav />
    </SHeader>
  );
}
