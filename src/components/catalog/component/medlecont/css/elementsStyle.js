import styled from "styled-components";

export const ElementsStyle = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 2 стовпці */
  grid-template-rows: repeat(2, 1fr); /* 3 рядки */
`;

export const InputStyle = styled.div`
  input{
    border-radius: 20px;
    border: 2px solid black;
    width: 50%;
    margin: 0% 1% 1% 2%;
    padding: 4px;
  }
`
