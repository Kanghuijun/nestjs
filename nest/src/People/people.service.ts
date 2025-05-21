import { Injectable } from '@nestjs/common';
import { CreatePeopleDto } from './create-people.dto';
import { DataSource, MongoNetworkError } from 'typeorm';
import { UpdatePeopleDto } from './update-people.dto';

@Injectable()
export class PeopleService {
  constructor(private readonly dataSource: DataSource) {}
  async create(createPeopledto: CreatePeopleDto) {
      const people = this.dataSource.getRepository('people').create(createPeopledto);
      await this.dataSource.getRepository('people').save(people);
      return people;

      //createPeopeldto로 받아온 데이터를
      // people라는 테이블(주소??)을을 조작할 수 있는 Repository를 받아와서
      //people이라는 변수에 넣고 데이터센터에 저장후 그 데이터 전체를 반환환 
    }
  async findAll(){
    const peoples = await this.dataSource.getRepository('people').find();
    return peoples
  }
  async findOne(id: number){
    const people = await this.dataSource.getRepository('people').findOne({
        where: { id },
    });
    if (!people) {
        throw new Error(`People with id ${id} not found`);
    }
    return people;
  }

  async update(id: number, updatePeopleDto: UpdatePeopleDto){
    const people = await this.dataSource.getRepository('people').findOne({
        where: { id }
    });
    if(!people) {
        throw new Error(`People with id ${id} not found`);
    }
    Object.assign(people, updatePeopleDto);
    await this.dataSource.getRepository('people').save(people);
    return people;
  }

  async remove(id: number) {
    const people = await this.dataSource.getRepository('people').findOne({
        where: { id }
    })
    if (!people) {
        throw new Error(`People with id ${id} not found`);
    }
    await this.dataSource.getRepository('people').remove(people);
    return people
  }

}
