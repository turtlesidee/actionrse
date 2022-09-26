
import { Column, Entity } from "typeorm";

@Entity()
export class Referent {

  @Column()
  firstname: string

  @Column()
  lastname: string
  
  @Column()
  email: string
}
