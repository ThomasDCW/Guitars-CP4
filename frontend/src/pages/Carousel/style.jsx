import styled from "styled-components";

export default styled.main`
  height: 76vh;
  .swiper {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
  }
  .swiper-slide {
    background: #fff;
    height: calc((100% - 30px) / 2);
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
`;
