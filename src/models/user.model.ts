import { Field, ObjectType } from '@nestjs/graphql';

import data from '../data';

data.users;
@ObjectType()
export class User {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => String)
  id: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => String)
  name: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => String)
  email: string;
}
