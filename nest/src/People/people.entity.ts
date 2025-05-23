import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class People {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  age: number;
}
