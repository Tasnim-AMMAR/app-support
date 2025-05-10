import { gql } from "@apollo/client";

export const GET_SUPPORT_REQUESTS = gql`
  query GetSupportRequests {
    supportRequests {
      id
      name
      email
      subject
      message
      status
      adminComment
      createdAt
    }
  }
`;