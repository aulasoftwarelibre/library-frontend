import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Layout } from "antd";

import BookList from "./components/BookList";

const { Header, Content } = Layout;

const Container = styled(Layout)`
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

  componentDidMount() {
    axios
      .get("http://library-heroku-production.herokuapp.com/api/books")
      .then(response => {
        const { data } = response;
        this.setState({ books: data["hydra:member"] });
      });
  }

  render() {
    const isBookListEmpty = !this.state.books.length;
    return (
      <Container>
        <Header>Library</Header>
        <Content>
          <Layout>
            <Wrapper>
              {isBookListEmpty ? (
                "Librería vacía"
              ) : (
                <BookList books={this.state.books} />
              )}
            </Wrapper>
          </Layout>
        </Content>
      </Container>
    );
  }
}

export default App;
