import styled from "styled-components";

export default styled.div`
  margin: 1em;
  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    transition: 0.5s;
    cursor: pointer;
  }
  img:hover {
    transform: scale(1.2);
  }
`;
