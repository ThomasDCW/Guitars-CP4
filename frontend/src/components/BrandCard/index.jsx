import propTypes from "prop-types";
import SBrandCard from "./style";

export default function BrandCard({
  brand,
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
      <div className="brandCardContainer">
        <img src={mainpicture} alt="guitarepic" />
        <ul>
          <li>
            <h3>{brand}</h3> {label}
          </li>
          <li>{style}</li>
          <li>{wood}</li>
          <li>{fret}</li>
          <li>{tunningfork}</li>
        </ul>
        <h2>{price}€</h2>
      </div>
    </SBrandCard>
  );
}
BrandCard.propTypes = {
  mainpicture: propTypes.string.isRequired,
  brand: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  style: propTypes.string.isRequired,
  wood: propTypes.string.isRequired,
  fret: propTypes.string.isRequired,
  tunningfork: propTypes.string.isRequired,
};
