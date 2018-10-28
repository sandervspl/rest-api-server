import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn({
    type: 'varchar',
    unique: true,
  })
  public id: string;
}
