import { gql } from "@apollo/client";

const GET_ARTICLES = gql`
  query getArticles {
    articles {
      id
      title
      content
      tag
      source
      date
    }
  }
`;

const GET_ARTICLE = gql`
  query getArticle($id: ID!) {
    article(id: $id) {
      id
      title
      content
      tag
      source
      date
    }
  }
`;

export { GET_ARTICLES, GET_ARTICLE };
