import { PrismaClient } from '@prisma/client';
import posts from '../lib/posts.json';

const prisma = new PrismaClient();

const createPosts = async () => {
  for (const post of posts) {
    await prisma.post.create({
      data: {
        title: post.title,
        content: post.content,
        shortDescription: post.description,
        image: post.urlToImage,
      },
    });
  }
};

export const seedDatabase = async () => {
  try {
    await createPosts();
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    prisma.$disconnect();
  }
};

seedDatabase();
