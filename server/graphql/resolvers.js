const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const resolvers = {
  Query: {
    supportRequests: () => 
      prisma.supportRequest.findMany({
        orderBy: {
          createdAt: 'desc',
        },
      }),
    
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
    },
    
    updateSupportRequest: async (_, { id, status, adminComment }) => {
      return prisma.supportRequest.update({
        where: {
          id: parseInt(id, 10), 
        },
        data: {
          status,
          adminComment,
        },
      });
    }
    
    
  },
};

module.exports = { resolvers };
