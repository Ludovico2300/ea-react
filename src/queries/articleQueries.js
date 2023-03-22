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

export { GET_ARTICLES };
