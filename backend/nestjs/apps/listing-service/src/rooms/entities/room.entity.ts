import { IsNotEmpty, IsUUID } from 'class-validator';
import { AbstractEntity } from 'libs/database/src';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { HotelEntity } from '../../hotels/entities/hotel.entity';

@Entity({ name: 'rooms' })
export class RoomEntity extends AbstractEntity<RoomEntity> {
  @Column()
  room_name: string;

  @Column('text')
  description: string;

  @Column()
  geolocation: string;

  @Column()
  main_pic: string;

  @IsUUID(4)
  @IsNotEmpty()
  @Column({ name: 'hotel_id' })
  hotel_id: string;

  @Column()
  @ManyToOne((type) => HotelEntity)
  @JoinColumn({ name: 'hotel_id' })
  hotel: HotelEntity;

  @Column()
  capacity: number;

  @Column('text')
  rule: string;

  @Column({ length: 1 })
  status: string;
}
