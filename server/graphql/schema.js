const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type SupportRequest {
    id: ID!
    title: String!
    description: String!
    category: String!
    urgency: String!
    status: String!
    adminComment: String
    createdAt: String!
  }

  type Query {
    supportRequests: [SupportRequest!]!
  }

  type Mutation {
    createSupportRequest(
      title: String!
      description: String!
      category: String!
      urgency: String!
    ): SupportRequest!
  }
`;

module.exports = { typeDefs };
