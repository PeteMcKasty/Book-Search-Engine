import { gql } from '@apollo/client';

export const GET_USER = gql`
  query {
    me {
      _id
      username
      email
      savedBooks {
        _id
        title
        authors
        description
        image
      }
    }
  }
`;

export const SEARCH_BOOKS = gql`
  query searchBooks($searchInput: String!) {
    searchBooks(query: $searchInput) {
      _id
      title
      authors
      description
      image
    }
  }
`;