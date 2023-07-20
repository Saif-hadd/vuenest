import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { query } from 'express';

@Controller('ninjas')
export class NinjasController {
  @Get()
  getNinjas(@Query('type') type: string) {
    return [{ type }];
  }
  @Get(':id')
  getOneNinjas(@Param('id') id: string) {
    return {
      id,
    };
  }
  @Post()
  CreateNinja(@Body() createNinjaDto) {
    return {};
  }

  @Put(':id')
  updateOneNinja(@Param('id') id: string) {
    return {
      id,
    };
  }
  @Delete(':id')
  RemoveNinja(@Param('id') id: string) {
    return {
      id,
    };
  }
}
