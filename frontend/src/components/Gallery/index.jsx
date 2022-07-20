import axios from "axios";
import { useState, useEffect } from "react";
import Card from "@components/Card";
import SGallery from "./style";

export default function Gallery() {
  const [guitars, setGuitars] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/guitars`)
      .then(({ data }) => {
        setGuitars(data);
      });
  }, []);

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
      <ul>
        {guitars
          .filter((guitar) => {
            return guitar.brand.toLowerCase().includes(search);
          })
          .map((guitar) => {
            return (
              <Card
                key={guitar.id}
                picture={guitar.picture}
                label={guitar.label}
                brand={guitar.brand}
                price={guitar.price}
              />
            );
          })}
      </ul>
    </SGallery>
  );
}
