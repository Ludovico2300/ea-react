import { gql } from "@apollo/client";

const ADD_ARTICLE = gql`
  mutation addArticle(
    $title: String!
    $content: String!
    $tag: ArticleTag!
    $source: String!
    $date: String!
  ) {
    addArticle(
      title: $title
      content: $content
      tag: $tag
      source: $source
      date: $date
    ) {
      id
      title
      content
      tag
      source
      date
    }
  }
`;

const DELETE_ARTICLE = gql`
  mutation deleteArticle($id: ID!) {
    deleteArticle(id: $id) {
      id
      title
      content
      tag
      source
      date
    }
  }
`;

const UPDATE_ARTICLE = gql`
  mutation UpdateArticle(
    $id: ID!
    $title: String!
    $content: String!
    $tag: ArticleTagUpdate!
    $source: String!
    $date: String!
  ) {
    updateArticle(
      id: $id
      title: $title
      content: $content
      tag: $tag
      source: $source
      date: $date
    ) {
      id
      title
      content
      tag
      source
      date
    }
  }
`;

export { ADD_ARTICLE, DELETE_ARTICLE, UPDATE_ARTICLE };
