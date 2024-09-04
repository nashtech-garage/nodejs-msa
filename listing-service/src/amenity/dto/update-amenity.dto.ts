import { PartialType } from '@nestjs/swagger';
import { CreateAmenityDto } from './create-amenity.dto';

export class UpdateAmenityDto extends PartialType(CreateAmenityDto) {}
