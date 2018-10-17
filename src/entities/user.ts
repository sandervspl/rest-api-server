import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
class User {
  @PrimaryColumn({
    type: 'varchar',
    unique: true,
  })
  public id: string;
}

export default User;
