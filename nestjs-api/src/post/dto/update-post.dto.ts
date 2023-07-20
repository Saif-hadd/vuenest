import { PartialType } from '@nestjs/swagger';
import { CreatePostDto } from './create-post.dto';
import { IsNotEmpty, IsBoolean } from 'class-validator';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  content: string;

  @IsBoolean()
  published: boolean;
}
