const { gql } = require('apollo-server-express');
const typeDefs = gql`
  type User {
    id: Int!
    email: String!
    name: String
    posts: [Post!]!
    createdAt: String!
    updatedAt: String!
  }

  type Post {
    id: Int!
    title: String!
    content: String
    published: Boolean!
    author: User!
    authorId: Int!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    users: [User!]!
    user(id: Int!): User
    posts: [Post!]!
    post(id: Int!): Post
  }

  type Mutation {
    createUser(email: String!, name: String): User!
    createPost(title: String!, content: String, authorId: Int!): Post!
    publishPost(id: Int!): Post!
  }
`;

module.exports = { typeDefs };