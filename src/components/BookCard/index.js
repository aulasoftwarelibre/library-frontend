import * as React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 150px;
  height: 160px;
  border: 1px solid black;
  padding: 10px;
`;

const BookCard = ({ title, description, year }) => (
  <Card>
    <p>{title}</p>
    <p>{description}</p>
    <p>{year}</p>
    <a href="/#" alt="Editar">
      Editar
    </a>
  </Card>
);

export default BookCard;
