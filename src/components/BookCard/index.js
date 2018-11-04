import * as React from "react";
import styled from "styled-components";

import { Card, Icon } from "antd";

const Container = styled(Card)`
  width: 300px;
`;

const BookCard = ({ title, description, year, authors }) => (
  <Container title={title} actions={[<Icon type="edit" />]}>
    <p>{description}</p>
    {year && (
      <p>
        <b>Year:</b> {year}
      </p>
    )}
    {authors && (
      <p>
        <b>Authors:</b> {authors}
      </p>
    )}
  </Container>
);

export default BookCard;
