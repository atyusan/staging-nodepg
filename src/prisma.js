import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function checkDatabaseConnection() {
  await prisma.$connect();
}

export default prisma;
