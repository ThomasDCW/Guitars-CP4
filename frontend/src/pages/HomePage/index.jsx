import { useState, useEffect } from "react";
import axios from "axios";
import CardLogo from "@components/CardLogo";
import SHompePage from "./style";

export default function HomePage() {
  const [logos, setLogos] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/logos`).then(({ data }) => {
      setLogos(data);
    });
  }, []);

  return (
    <SHompePage>
      <section className="logoContainer">
        {logos.map((logo) => {
          return (
            <a href={logo.link}>
              <CardLogo picture={logo.picture} />
            </a>
          );
        })}
      </section>
    </SHompePage>
  );
}
