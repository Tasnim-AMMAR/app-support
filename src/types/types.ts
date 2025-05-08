// src/types/types.ts

// User Types
export interface User {
    id: string;
    name: string;
    email: string;
    role: 'USER' | 'ADMIN' | 'SUPPORT_AGENT';
    createdAt: Date;
    updatedAt: Date;
  }
  
  // Ticket Types
  export type TicketStatus = 'OPEN' | 'IN_PROGRESS' | 'RESOLVED' | 'CLOSED';
  export type TicketPriority = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  
  export interface Ticket {
    id: string;
    title: string;
    description: string;
    status: TicketStatus;
    priority: TicketPriority;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    assignedToId?: string;
    comments?: Comment[];
  }
  
  // Comment Types
  export interface Comment {
    id: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    ticketId: string;
    user: Pick<User, 'id' | 'name' | 'email'>;
  }
  
  // API Response Types
  export interface ApiResponse<T> {
    data?: T;
    error?: string;
    message?: string;
  }
  
  // Form Types
  export interface CreateTicketForm {
    title: string;
    description: string;
    priority: TicketPriority;
  }
  
  export interface UpdateTicketForm {
    status?: TicketStatus;
    assignedToId?: string;
    priority?: TicketPriority;
  }
  
  // Prisma Types (if you want to generate from your schema)
  // import { Ticket as PrismaTicket, User as PrismaUser } from '@prisma/client';
  // export type TicketWithRelations = PrismaTicket & { user: PrismaUser };