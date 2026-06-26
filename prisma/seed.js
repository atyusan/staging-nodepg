import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const posts = [
  {
    title: 'Welcome to Your Blog',
    content:
      'This is your first post. You can edit or delete it, or create new posts from the dashboard.\n\nA blog is a great place to share ideas, tutorials, and updates with your audience.',
    excerpt: 'This is your first post. You can edit or delete it, or create new posts from the dashboard.',
    published: true,
  },
  {
    title: 'Getting Started with Node.js and Prisma',
    content:
      'This blog app uses Express for the API layer and Prisma as the ORM. Prisma makes database access type-safe and straightforward.\n\nRun the backend with npm run dev and the frontend with npm run dev in the frontend folder.',
    excerpt: 'This blog app uses Express for the API layer and Prisma as the ORM.',
    published: true,
  },
  {
    title: 'Building a React Frontend',
    content:
      'The frontend is built with React and Vite for fast development. React Router handles navigation between the home page, post detail, and editor views.\n\nThe UI is kept clean and responsive so you can focus on your content.',
    excerpt: 'The frontend is built with React and Vite for fast development.',
    published: true,
  },
];

async function main() {
  await prisma.post.deleteMany();
  await prisma.post.createMany({ data: posts });
  console.log('Seeded database with sample posts');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
