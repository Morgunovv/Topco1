import { gql } from '@apollo/client';

export const GET_MAINS = gql`
  query GetMains {
    mains {
      data {
        id
        attributes {
          Text
          createdAt
          updatedAt
        }
      }
    }
  }
`; 