import styled from "styled-components";

export default styled.nav`
  width: 80%;
  a {
    color: #000000d6;
    margin: 1em;
    text-decoration: none;
    background: linear-gradient(to top, #000000d6, #000000d6, transparent 10%)
      no-repeat left bottom / 0 100%;
    transition: background-size 1.2s;
    cursor: pointer;
    font-size: 1em;
    font-weight: bold;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    background-size: 100% 100%;
  }
`;
