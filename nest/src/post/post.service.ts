import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { DataSource } from 'typeorm';

@Injectable()
export class PostService {
  constructor(private readonly dataSource: DataSource) {}
  async create(createPostDto: CreatePostDto) {
    const post = this.dataSource.getRepository('post').create(createPostDto);
    await this.dataSource.getRepository('post').save(post);
    return post;
  }

  async findAll() {
    const posts = await this.dataSource.getRepository('post').find();
    return posts;
  }

  async findOne(id: number) {
    const post = await this.dataSource.getRepository('post').findOne({
      where: { id },
    });
    if (!post) {
      throw new Error(`Post with id ${id} not found`);
    }
    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.dataSource.getRepository('post').findOne({
      where: { id },
    });
    if (!post) {
      throw new Error(`Post with id ${id} not found`);
    }
    Object.assign(post, updatePostDto);
    await this.dataSource.getRepository('post').save(post);
    return post;
  }

  async remove(id: number) {
    const post = await this.dataSource.getRepository('post').findOne({
      where: { id },
    });
    if (!post) {
      throw new Error(`Post with id ${id} not found`);
    }
    await this.dataSource.getRepository('post').remove(post);
    return post;
  }
}
