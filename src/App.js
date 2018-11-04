import React from "react";
import styled, { css } from "styled-components";
import _ from "lodash";

import BookCard from "./components/BookCard";

const Container = styled.div`
  height: 100vh;
`;

const BooksContainer = styled.div`
  display: flex;
  margin-top: 20px;
  width: 700px;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  ${props =>
    !props.isLastRow &&
    css`
      margin-bottom: 10px;
    `};
`;

const Element = styled.div`
  ${props =>
    !props.isLastElement &&
    css`
      margin-right: 10px;
    `};
`;

const books = [
  {
    title: "El principito",
    description: "Peaso libro",
    year: "2018"
  },
  {
    title: "El niño del pijama de rayas",
    description: "Que triste",
    year: "2017"
  },
  {
    title: "El niño del pijama de rayas",
    description: "Que triste",
    year: "2017"
  },
  {
    title: "El niño del pijama de rayas",
    description: "Que triste",
    year: "2017"
  },
  {
    title: "El niño del pijama de rayas",
    description: "Que triste",
    year: "2017"
  },
  {
    title: "El niño del pijama de rayas",
    description: "Que triste",
    year: "2017"
  },
  {
    title: "El niño del pijama de rayas",
    description: "Que triste",
    year: "2017"
  },
  {
    title: "El niño del pijama de rayas",
    description: "Que triste",
    year: "2017"
  },
  {
    title: "El niño del pijama de rayas",
    description: "Que triste",
    year: "2017"
  },
  {
    title: "El niño del pijama de rayas",
    description: "Que triste",
    year: "2017"
  }
];

const App = () => {
  const rows = _.chunk(books, 4);
  return (
    <Container>
      <Wrapper>
        <BooksContainer>
          {rows.map((row, i) => (
            <Row index={Math.random()} isLastElement={i + 1 === rows.length}>
              {row.map((book, index) => (
                <Element isLastElement={index + 1 === row.length}>
                  <BookCard
                    title={book.title}
                    description={book.description}
                    year={book.year}
                  />
                </Element>
              ))}
            </Row>
          ))}
        </BooksContainer>
      </Wrapper>
    </Container>
  );
};

export default App;
