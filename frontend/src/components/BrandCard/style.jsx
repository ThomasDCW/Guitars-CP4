import styled from "styled-components";

export default styled.section`
  display: flex;
  justify-content: center;
  .brandCardContainer {
    width: 72%;
    height: 300px;
    margin: 1em;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 5px;
    border-radius: 10px;

    ul {
      height: 70%;
      width: 60%;
      color: var(--main-color);
      li:first-child {
        display: flex;
        font-size: 1.4em;

        h3 {
          letter-spacing: 0;
          margin-right: 1em;
          font-weight: bold;
        }

        list-style: none;
      }
      li {
        padding: 0.5em;
        list-style: circle inside;
      }
    }
    h2 {
      letter-spacing: 0;
      color: #5900ad99;
      height: 60%;
      font-weight: bold;
      font-size: 1.6em;
      padding: 0.5em;
    }
    img {
      height: 70%;
      object-fit: cover;
    }
  }
`;
