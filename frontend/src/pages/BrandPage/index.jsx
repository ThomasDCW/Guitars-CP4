import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "@components/Card";

export default function BrandPage() {
  const [BrandGuitars, setBrandGuitars] = useState([]);
  const { selectedBrand } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/guitars/`)
      .then(({ data }) => {
        setBrandGuitars(data);
      });
  }, []);

  return (
    <div>
      {BrandGuitars.filter((Brand) => {
        if (selectedBrand === Brand.brand) {
          return BrandGuitars;
        }
        return null;
      }).map((BrandGuitar) => {
        return (
          <div>
            <Card
              key={BrandGuitar.id}
              picture={BrandGuitar.picture}
              label={BrandGuitar.label}
              brand={BrandGuitar.brand}
              price={BrandGuitar.price}
            />
          </div>
        );
      })}
    </div>
  );
}
