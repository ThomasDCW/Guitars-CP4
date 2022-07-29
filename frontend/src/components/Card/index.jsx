import propTypes from "prop-types";

import SCard from "./style";

export default function Card({ picture, label, brand, price, id }) {
  return (
    <SCard key={id}>
      <img src={picture} alt="pic" />
      <div className="infos">
        <h2>{label}</h2>
        <h4>{brand}</h4>
        <p>{price}€</p>
      </div>
    </SCard>
  );
}
Card.propTypes = {
  picture: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  brand: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  id: propTypes.number.isRequired,
};
