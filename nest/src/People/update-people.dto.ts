import { PartialType } from '@nestjs/mapped-types';
import { CreatePeopledto } from './create-people.dto';

export class UpdatePeopleDto extends PartialType(CreatePeopledto) {}
