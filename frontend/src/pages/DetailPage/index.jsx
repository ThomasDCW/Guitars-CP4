/* eslint-disable */
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import SDetailPage from "./style";

export default function DetailPage() {
  const { selectedId } = useParams();
  const [detailGuitar, setDetailGuitar] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/guitars/${selectedId}`)
      .then(({ data }) => {
        setDetailGuitar(data);
      });
  }, []);

  return (
    <SDetailPage>
      <div className="carouselContainer">
        <Swiper
          navigation={true}
          color="black"
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={detailGuitar.frontpicture} alt="slide1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={detailGuitar.backpicture} alt="slide2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={detailGuitar.botpicture} alt="slide3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={detailGuitar.toppicture} alt="slide4" />
          </SwiperSlide>
        </Swiper>
      </div>
      <article className="infoContainer">
        <h2>
          {detailGuitar.brand}, {detailGuitar.label}
        </h2>

        <p>{detailGuitar.price}€</p>
        <h3>{detailGuitar.style} Guitar</h3>
        <ul>
          <li>{detailGuitar.wood}</li>
          <li>{detailGuitar.fret}</li>
          <li>{detailGuitar.tunningfork}</li>
        </ul>
      </article>
    </SDetailPage>
  );
}
