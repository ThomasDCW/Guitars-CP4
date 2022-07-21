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
      border: 2px solid #000000d6;
    }

    input:hover {
      box-shadow: rgba(0, 0, 0, 0.35) 2px 6px 6px;
    }
  }

  .radio-container {
    background-color: #000000d6;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
    padding: 10px;
    list-style: none;
    input {
      cursor: pointer;
    }

    label {
      margin-left: 10px;
      cursor: pointer;
    }
  }

  .buttonContainer {
    display: flex;
    justify-content: center;

    button {
      margin: 0 auto 20px;
      background: none;
      border: 3px solid #000000d6;
      padding: 6px 16px;
      border-radius: 10px;
      cursor: pointer;
      transition: 0.2s;
      font-size: 1em;

      &:hover {
        background: #000000d6;
        color: white;
      }
    }
  }

  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and (max-width: 375px) {
    .radio-container {
      background-color: #000000d6;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      margin-bottom: 20px;
      padding: 10px;
      list-style: none;
      input {
        cursor: pointer;
      }

      label {
        margin-left: 10px;
        cursor: pointer;
      }
    }
  }
`;
