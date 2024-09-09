import { Field, ObjectType } from "@nestjs/graphql";
import { IsDate, IsNotEmpty, IsOptional, IsUUID } from "class-validator";
import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@ObjectType()
export abstract class AbstractEntity<Entity> {
    @PrimaryGeneratedColumn('uuid')
    @IsUUID(4)
    @IsNotEmpty()
    @Field()
    public id: string;

    @CreateDateColumn({ type: 'timestamp', select: false })
    @IsDate()
    @IsOptional()
    @Field(() => Date, { nullable: true })
    public readonly created_at?: Date;

    @UpdateDateColumn({ type: 'timestamp', select: false })
    @IsDate()
    @IsOptional()
    @Field(() => Date, { nullable: true })
    public updated_at?: Date;

    public constructor(entity: Partial<Entity>) {
        Object.assign(this, entity);
    }
}
