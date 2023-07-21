import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async create(data) {
    const resp = await this.prisma.post.create({
      data: data,
      select: {
        id: true,
        title: true,
        content: true,
        published: true,
      },
    });
    return {
      id: resp.id,
      title: resp.title,
      content: resp.content,
      published: resp.published,
    };
  }
  async update(id: number, data: UpdatePostDto) {
    const existingPost = await this.prisma.post.findUnique({
      where: { id },
    });

    if (!existingPost) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }

    const updatedPost = await this.prisma.post.update({
      where: { id },
      data,
      select: {
        id: true,
        title: true,
        content: true,
        published: true,
      },
    });
    return updatedPost;
  }
  async delete(id: number) {
    const existingPost = await this.prisma.post.findUnique({
      where: { id },
    });

    if (!existingPost) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    await this.prisma.post.delete({
      where: { id },
    });
    return true;
  }
  async get(id: number) {
    const existingPost = await this.prisma.post.findUnique({
      where: { id },
    });

    if (!existingPost) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }

    return existingPost;
  }
  async getAll() {
    const allPosts = await this.prisma.post.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        published: true,
      },
    });

    return allPosts;
  }
}
