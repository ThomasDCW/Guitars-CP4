import styled from "styled-components";

export default styled.main`
  height: 76vh;
  display: flex;
  justify-content: center;
  .logoContainer {
    width: 80%;
    height: 70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and (max-width: 375px) {
    height: auto;
  }
`;
