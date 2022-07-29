import { Link } from "react-router-dom";
import SNav from "./style";

export default function Nav() {
  return (
    <SNav>
      <Link to="./gallery">Gallery</Link>
      <Link to="/carousel">Carousel</Link>
    </SNav>
  );
}
