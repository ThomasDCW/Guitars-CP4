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
      <h2>
        {detailGuitar.brand}, {detailGuitar.label},{detailGuitar.style} Guitar
      </h2>
      <section className="mainContainer">
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
          <ul>
            <li>{detailGuitar.wood}</li>
            <li>{detailGuitar.fret}</li>
            <li>{detailGuitar.tunningfork}</li>
          </ul>
          <h4>{detailGuitar.price}€</h4>
        </article>
      </section>
    </SDetailPage>
  );
}
