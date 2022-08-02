import propTypes from "prop-types";
import SBrandCard from "./style";

export default function BrandCard({
  label,
  style,
  price,
  mainpicture,
  wood,
  fret,
  tunningfork,
}) {
  return (
    <SBrandCard>
      <p>{label}</p>
      <p>{style}</p>
      <p>{price}€</p>
      <img src={mainpicture} alt="guitarepic" />
      <p>{wood}</p>
      <p>{fret}</p>
      <p>{tunningfork}</p>
    </SBrandCard>
  );
}
BrandCard.propTypes = {
  mainpicture: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  style: propTypes.string.isRequired,
  wood: propTypes.string.isRequired,
  fret: propTypes.string.isRequired,
  tunningfork: propTypes.string.isRequired,
};
