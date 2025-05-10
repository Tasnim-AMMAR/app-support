const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar DateTime  

  type SupportRequest {
    id: ID!
    title: String!
    description: String!
    category: String!
    urgency: String!
    status: String!
    adminComment: String
    createdAt: DateTime! 
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

    updateSupportRequest(
    id: ID!
    status: String!
    adminComment: String
  ): SupportRequest!
  }
  
`;

module.exports = { typeDefs };
