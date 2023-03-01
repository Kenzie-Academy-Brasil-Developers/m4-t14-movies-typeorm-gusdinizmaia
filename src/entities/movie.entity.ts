import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Movies {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 50, unique: true })
  name: string;

  @Column({ nullable: true, default: null })
  description: string;

  @Column()
  duration: number;

  @Column()
  price: number;
}

export default Movies;
