import { ApiProperty } from '@nestjs/swagger';
export class CreatePostDto {
  @ApiProperty()
  public id: number;
  @ApiProperty()
  public title: string;
  @ApiProperty()
  public content: string;
  @ApiProperty()
  public published: boolean;
}
