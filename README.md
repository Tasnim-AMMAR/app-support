# app-support

This is a full-stack application built with:
- **Frontend**: Next.js
- **Backend**: Express.js 
- **API**: GraphQL with Apollo Server
- **Database ORM**: Prisma

## Getting Started

### Prerequisites
- Node.js 
- npm or yarn
- PostgreSQL 

### Run PostgreSQL with Docker
If you don’t have PostgreSQL installed locally, you can use Docker:

```bash
docker run --name app-support-postgres \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=app-support \
  -p 5432:5432 \
  -d postgres
```

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Tasnim-AMMAR/app-support
cd app-support
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/app-support?schema=public
```

4. Set up the database:
```bash
npx prisma migrate dev --name init
```

5. Run the development server:
```bash
npm run dev:full
```

### Scripts

- `npm run dev` - Run Next.js frontend
- `npm run server` - Run Express backend
- `npm run dev:full` - Run both frontend and backend concurrently
- `npm run prisma:migrate` - Create a new Prisma migration
- `npm run prisma:generate` - Generate Prisma client

## API URL

All API requests can be made to the following GraphQL endpoint:
- http://localhost:4000/api/graphql
