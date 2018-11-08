import React from "react";
import styled, { css } from "styled-components";
import _ from "lodash";

import BookCard from "../BookCard";

const BooksContainer = styled.div`
  display: flex;
  flex-direction: column;
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

const BookList = ({ books }) => {
  const rows = _.chunk(books, 4);
  return (
    <BooksContainer>
      {rows.map((row, i) => (
        <Row key={Math.random()} isLastElement={i + 1 === rows.length}>
          {row.map((book, index) => (
            <Element
              key={Math.random()}
              isLastElement={index + 1 === row.length}
            >
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
  );
};

export default BookList;
