import logo from "@assets/logo/logo.png";
import { Link } from "react-router-dom";
import SLogo from "./style";

export default function Logo() {
  return (
    <SLogo>
      <Link to="./">
        <img src={logo} alt="logo" />
      </Link>
    </SLogo>
  );
}
