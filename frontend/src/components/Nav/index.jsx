import { Link } from "react-router-dom";
import SNav from "./style";

export default function Nav() {
  return (
    <SNav>
      <Link to="./Gallery">Gallery</Link>
      <Link to="./Carousel">Carousel</Link>
    </SNav>
  );
}
