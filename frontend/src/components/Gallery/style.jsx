import styled from "styled-components";

export default styled.section`
  .searchbar {
    display: flex;
    justify-content: center;
    input {
      text-align: center;
      width: 400px;
      height: 40px;
      margin: 1em;
      margin-bottom: 4vh;
      font-size: 1em;
      border-radius: 24px;
      border: none;
      box-shadow: rgba(0, 0, 0, 0.35) 1px 3px 3px;
    }
    input:hover {
      box-shadow: rgba(0, 0, 0, 0.35) 2px 6px 6px;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
