const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const resolvers = {
  Query: {
    supportRequests: () => prisma.supportRequest.findMany(),
  },
  Mutation: {
    createSupportRequest: (_, { title, description, category, urgency }) => {
      return prisma.supportRequest.create({
        data: {
          title,
          description,
          category,
          urgency,
          status: 'Pending',
        },
      });
    }
    
  },
};

module.exports = { resolvers };
