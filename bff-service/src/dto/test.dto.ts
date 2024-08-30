import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Author {
  @Field((type) => ID)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;
}
