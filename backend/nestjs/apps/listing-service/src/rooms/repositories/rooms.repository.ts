import { AbstractRepository } from '@app/database';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomEntity } from '../entities/room.entity';

@Injectable()
export class RoomRepository extends AbstractRepository<RoomEntity> {
  constructor(
    @InjectRepository(RoomEntity)
    private readonly roomRepository: Repository<RoomEntity>,
  ) {
    super(roomRepository);
  }
}
