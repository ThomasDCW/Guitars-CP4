import styled from "styled-components";

export default styled.div`
  h2,
  h3,
  h4,
  p,
  li {
    color: var(--main-color);
  }
  min-height: 90vh;
  .mainContainer {
    display: flex;
    justify-content: space-around;
  }
  .carouselContainer {
    width: 420px;
    height: 520px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: var(--main-color);
  }
  h2 {
    font-size: 1.6em;
    padding: 2em;
    font-weight: bold;
    text-transform: uppercase;
  }
  .infoContainer {
    h3 {
      font-size: 1.2em;
      text-align: end;
      padding: 1em;
    }
    h4 {
      margin: auto;
      margin-top: 24vh;
      font-size: 4em;
      text-align: center;
      padding: 0.5em;
      font-weight: bold;
      border-radius: 16px;
      color: var(--main-color);
      font-family: "Open Sans", Verdana, Tahoma, Arial, Helvetica, sans-serif;
    }
    li {
      font-size: 1em;
      padding: 1em;
      list-style: circle inside;
    }
  }
`;
