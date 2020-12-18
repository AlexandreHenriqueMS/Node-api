import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export default class User {

  @PrimaryGeneratedColumn('increment')
  id: Number;

  @Column()
  email: String;

  @Column()
  password: String;

  @Column()
  userName: String;
}




