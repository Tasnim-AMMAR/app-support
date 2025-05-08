const resolvers = {
    Query: {
      users: (_, __, { prisma }) => {
        return prisma.user.findMany();
      },
      user: (_, { id }, { prisma }) => {
        return prisma.user.findUnique({
          where: { id },
        });
      },
      posts: (_, __, { prisma }) => {
        return prisma.post.findMany();
      },
      post: (_, { id }, { prisma }) => {
        return prisma.post.findUnique({
          where: { id },
        });
      },
    },
    Mutation: {
      createUser: (_, { email, name }, { prisma }) => {
        return prisma.user.create({
          data: {
            email,
            name,
          },
        });
      },
      createPost: (_, { title, content, authorId }, { prisma }) => {
        return prisma.post.create({
          data: {
            title,
            content,
            author: {
              connect: { id: authorId },
            },
          },
        });
      },
      publishPost: (_, { id }, { prisma }) => {
        return prisma.post.update({
          where: { id },
          data: { published: true },
        });
      },
    },
    User: {
      posts: (parent, _, { prisma }) => {
        return prisma.post.findMany({
          where: { authorId: parent.id },
        });
      },
    },
    Post: {
      author: (parent, _, { prisma }) => {
        return prisma.user.findUnique({
          where: { id: parent.authorId },
        });
      },
    },
  };
  
  module.exports = { resolvers };