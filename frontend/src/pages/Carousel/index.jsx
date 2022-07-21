/* eslint-disable */
import axios from "axios";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import Card from "@components/Card";
import SCarousel from "./style";

export default function Carousel() {
  const [guitars, setGuitars] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/guitars`)
      .then(({ data }) => {
        setGuitars(data);
      });
  }, []);

  return (
    <SCarousel>
      <Swiper
        slidesPerView={6}
        grid={{
          rows: 2,
        }}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
      >
        {guitars
          .sort((a, b) => b.price - a.price)
          .map((guitar) => {
            return (
              <SwiperSlide>
                <Card
                  key={guitar.id}
                  picture={guitar.picture}
                  label={guitar.label}
                  brand={guitar.brand}
                  price={guitar.price}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </SCarousel>
  );
}
