import logo from "@assets/logo/logo.png";
import SLogo from "./style";

export default function Logo() {
  return (
    <SLogo>
      <img src={logo} alt="logo" />
    </SLogo>
  );
}
