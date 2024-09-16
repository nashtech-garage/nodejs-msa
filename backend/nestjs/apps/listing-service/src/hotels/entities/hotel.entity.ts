import { AbstractEntity } from 'libs/database/src';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'hotels' })
export class HotelEntity extends AbstractEntity<HotelEntity> {
  @Column()
  hotel_name: string;

  @Column('text')
  description: string;

  @Column()
  geolocation: string;

  @Column()
  main_pic: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column({ length: 1 })
  status: string;

  @Column({ nullable: true })
  created_by: number;

  @Column({ nullable: true })
  updated_by: number;
}
