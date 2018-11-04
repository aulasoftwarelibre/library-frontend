import React from "react";
import styled from "styled-components";
import { Layout } from "antd";

import BookList from "./components/BookList";

const { Header, Content } = Layout;

const Container = styled(Layout)`
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
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
  return (
    <Container>
      <Header>Library</Header>
      <Content>
        <Wrapper>
          <BookList books={books} />
        </Wrapper>
      </Content>
    </Container>
  );
};

export default App;
