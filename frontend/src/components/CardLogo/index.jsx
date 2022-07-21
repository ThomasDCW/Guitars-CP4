import propTypes from "prop-types";
import SCardLogo from "./style";

export default function CardLogo({ picture }) {
  return (
    <SCardLogo>
      <img src={picture} alt="brand-logo" />
    </SCardLogo>
  );
}
CardLogo.propTypes = {
  picture: propTypes.string.isRequired,
};
