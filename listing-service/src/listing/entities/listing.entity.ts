import { Listing } from '@prisma/client';

export class ListingEntity implements Listing {
    constructor(partial: Partial<ListingEntity>) {
		if (partial) {
			Object.assign(this, partial)
		}
	}
    maxPeople: number;
    id: number;
    name: string;
    description: string;
    firstPic: string;
    createdAt: Date;
    createdBy: number;
    updatedAt: Date;
    updatedBy: number;
    idCategory: number;
}