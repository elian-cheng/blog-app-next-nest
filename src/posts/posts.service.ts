import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async create(createPostDto: CreatePostDto) {
    const post = await this.prisma.post.create({
      data: {
        ...createPostDto,
      },
    });

    return post;
  }

  async findAll(page: number = 1, limit: number = 12) {
    const skip = (page - 1) * limit;

    const posts = await this.prisma.post.findMany({
      skip,
      take: limit,
    });

    const totalPosts = await this.prisma.post.count();

    return {
      data: posts,
      totalPosts,
    };
  }

  async findOne(id: string) {
    const post = await this.prisma.post.findUnique({
      where: { id },
    });

    if (!post) throw new NotFoundException('Post not found');

    return post;
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    const post = await this.prisma.post.findUnique({
      where: {
        id,
      },
    });

    if (!post) throw new NotFoundException('Post not found');

    return this.prisma.post.update({
      where: {
        id,
      },
      data: {
        ...updatePostDto,
      },
    });
  }

  async remove(id: string) {
    const post = await this.prisma.post.findUnique({
      where: {
        id,
      },
    });

    if (!post) throw new NotFoundException('Post not found');

    await this.prisma.post.delete({
      where: {
        id,
      },
    });
  }
}
