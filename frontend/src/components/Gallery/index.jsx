import axios from "axios";
import { useState, useEffect } from "react";
import Card from "@components/Card";
import SGallery from "./style";

export default function Gallery() {
  const [guitars, setGuitars] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/guitars`)
      .then(({ data }) => {
        setGuitars(data);
      });
  }, []);

  return (
    <SGallery>
      {guitars.map((guitar) => {
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
    </SGallery>
  );
}
