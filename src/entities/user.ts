import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn({
    type: 'varchar',
    unique: true,
  })
  public id: string;

  @Column({
    type: 'varchar',
    unique: true,
  })
  public username: string;
}
