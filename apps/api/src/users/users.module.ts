import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { ConfigModule } from '@nestjs/config';
import { UserSchema } from './entities/user.schema';


@Module({
  imports: [
    MongooseModule.forFeature([ { name: User.name, schema:UserSchema}]),
     ConfigModule.forRoot()
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
