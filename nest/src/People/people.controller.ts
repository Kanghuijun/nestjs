import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreatePeopleDto } from './create-people.dto';
import { PeopleService } from './people.service';
import { UpdatePeopleDto } from './update-people.dto';

@Controller('people')
export class PeopleController{
    constructor(private readonly peopleService: PeopleService) {}
    @Post()
    async create(@Body() createPeopleDto: CreatePeopleDto){
      await this.peopleService.create(createPeopleDto);
      return {
        message: 'People created successfully'
      };
    }
    @Get() //Get은 정보 가져오기 전체 가져오기 명령에는 매개변수 없어도 됨
    async findAll(){
      return {
        data: await this.peopleService.findAll()
      };
    }
    @Get(':id')
    async findOne(@Param('id') id: string){//내부 엔티티나 dto에선 숫자로 받았지만 주소에서는 문자열로 왔음 ㅇㅇ
      return await this.peopleService.findOne(+id); //+로 형변환
    }
    @Patch(':id')
    async update(@Param('id') id: string, @Body() updatePeopletDto: UpdatePeopleDto){
      await this.peopleService.update(+id, updatePeopletDto)
      return {
        message: 'People updated successfully'
      };
      }
    @Delete(':id')
    async remove(@Param('id') id: string){
      await this.peopleService.remove(+id);
      return {
        message: 'People deleted successfully'
      };
    }

}