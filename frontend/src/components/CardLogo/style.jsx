import styled from "styled-components";

export default styled.div`
  height: 200px;
  width: 250px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
  margin: 1em;
  :hover {
    transform: scale(1.1);
  }
  img {
    object-fit: contain;
    height: 200px;
    width: 250px;
  }
`;
