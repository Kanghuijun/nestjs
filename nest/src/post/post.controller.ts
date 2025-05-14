import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
// http://localhost:3000/post
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async create(@Body() createPostDto: CreatePostDto) {
    await this.postService.create(createPostDto);
    return {
      message: 'Post created successfully',
    };
  }

  @Get()
  async findAll() {
    return {
      data: await this.postService.findAll(),
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.postService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    await this.postService.update(+id, updatePostDto);
    return {
      message: 'Post updated successfully',
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.postService.remove(+id);
    return {
      message: 'Post deleted successfully',
    };
  }
}
