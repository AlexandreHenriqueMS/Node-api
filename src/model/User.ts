import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export default class User {

  @PrimaryGeneratedColumn('rowid')
  id: Number;

  @Column()
  @Index()
  email: String;

  @Column()
  @Index()
  password: String;

  @Column()
  @Index()
  userName: String;
}




