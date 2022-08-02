import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import BrandCard from "@components/BrandCard";

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
            <BrandCard
              key={BrandGuitar.id}
              brand={BrandGuitar.brand}
              label={BrandGuitar.label}
              mainpicture={BrandGuitar.picture}
              style={BrandGuitar.style}
              price={BrandGuitar.price}
              wood={BrandGuitar.wood}
              fret={BrandGuitar.fret}
              tunningfork={BrandGuitar.tunningfork}
            />
          </div>
        );
      })}
    </div>
  );
}
