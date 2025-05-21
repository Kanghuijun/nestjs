import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreatePeopledto } from './create-people.dto';

@Controller()
export class PeopleController{
    constructor(private readonly postService: PostService) {}
    @Get()

    @Post()

    @Patch()

    @Delete()

  controller(get, post, patch, delete), service(db 접속 할 수 있도록)

}