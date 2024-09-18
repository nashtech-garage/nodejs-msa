import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoomDto } from '../dto/create-room.dto';
import { UpdateRoomDto } from '../dto/update-room.dto';
import { RoomEntity } from '../entities/room.entity';
import { RoomRepository } from '../repositories/rooms.repository';

@Injectable()
export class RoomsService {
  constructor(private roomRepository: RoomRepository) {}

  async create(createRoomDto: CreateRoomDto): Promise<void> {
    await this.roomRepository.create(createRoomDto);
  }

  async findAll(): Promise<RoomEntity[]> {
    return await this.roomRepository.find();
  }

  async findOne(id: string): Promise<RoomEntity> {
    const room = await this.roomRepository.findOne({ where: { id } });
    if (!room) {
      throw new NotFoundException(`Room with ID ${id} not found`);
    }
    return room;
  }

  // Update a room by ID
  async update(id: string, updateRoomDto: UpdateRoomDto): Promise<void> {
    await this.roomRepository.update(
      {
        id,
      },
      { ...updateRoomDto },
    );
  }

  // Remove a room by ID
  async remove(id: string): Promise<void> {
    const result = await this.roomRepository.delete({ id });
  }
}
