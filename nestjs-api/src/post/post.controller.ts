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

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get(':id')
  getPost(@Param('id') id: string): any {
    const posts = this.postService.get(parseInt(id, 10));
    return posts;
  }
  @Get()
  getAllPosts(): any {
    const posts = this.postService.getAll();
    return posts;
  }

  @Post()
  addPost(@Body() data: CreatePostDto): any {
    console.log('aaaaaaaaa', data);
    const resp = this.postService.create(data);
    return resp;
  }
  @Patch(':id')
  updatePost(@Param('id') id: string, @Body() data: UpdatePostDto): any {
    const updatedPost = this.postService.update(parseInt(id, 10), data);
    return updatedPost;
  }
  @Delete(':id')
  deletePost(@Param('id') id: string): any {
    const deletePost = this.postService.delete(parseInt(id, 10));
    return deletePost;
  }
}
