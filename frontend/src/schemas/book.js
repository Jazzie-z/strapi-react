import { gql } from "@apollo/client";

export const BOOKS = gql`
  query GetBooks {
    books {
      data {
        id
        attributes {
          title
          author
          description
          categories {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const BOOK_BY_ID = gql`
  query GetBook($id: ID!) {
    book(id: $id) {
      data {
        id
        attributes {
          title
          author
          description
          categories {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;
