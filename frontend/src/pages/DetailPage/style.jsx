import styled from "styled-components";

export default styled.div`
  height: 90vh;
  display: flex;
  justify-content: space-around;
  .carouselContainer {
    width: 40vw;
    img {
      width: 100%;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: var(--main-color);
  }
`;
