import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "@components/Card";
import SGallery from "./style";

export default function Gallery() {
  const [guitars, setGuitars] = useState([]);
  const [guitarstyle, setGuitarsStyle] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/guitars`)
      .then(({ data }) => {
        setGuitars(data);
      });
  }, []);

  useEffect(() => {
    setGuitarsStyle([...new Set(guitars.map((guitar) => guitar?.style))]);
  }, [guitars]);

  const handleSearch = (e) => {
    const brand = e.target.value;
    setSearch(brand);
  };

  return (
    <SGallery>
      <div className="searchbar">
        <input
          type="text"
          placeholder="Which brand do you like ?"
          onChange={handleSearch}
        />
      </div>

      <ul className="radio-container">
        {guitarstyle.map((guitartyle) => (
          <li>
            <input
              type="radio"
              id={guitartyle}
              name="continentRadio"
              checked={guitartyle === selectedRadio}
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={guitartyle}>{guitartyle}</label>
          </li>
        ))}
      </ul>
      <div className="buttonContainer">
        {selectedRadio && (
          <button type="button" onClick={() => setSelectedRadio("")}>
            Annuler la recherche
          </button>
        )}
      </div>

      <div className="gallery">
        {guitars
          .filter((guitar) => {
            return guitar.brand.toLowerCase().includes(search);
          })
          .filter((guitar) => guitar.style.includes(selectedRadio))
          .sort((a, b) => b.price - a.price)

          .map((guitar) => {
            return (
              <Link to={`/gallery/${guitar.id}`}>
                <Card
                  key={guitar.id}
                  picture={guitar.picture}
                  label={guitar.label}
                  brand={guitar.brand}
                  price={guitar.price}
                />
              </Link>
            );
          })}
      </div>
    </SGallery>
  );
}
