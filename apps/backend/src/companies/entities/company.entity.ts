import { Column, Entity, ObjectIdColumn } from "typeorm";
import { Referent } from "./referent.entity";
@Entity()
export class Company {

  @ObjectIdColumn({ type: "uuid"})
  id: string

  @Column()
  name: string

  @Column(() => Referent)
  referent: Referent
}
