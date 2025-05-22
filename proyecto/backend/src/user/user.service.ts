import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class UserService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  create(createUserDto: CreateUserDto) {
    return this.user.create({
      data: createUserDto,
    });
  }

   findAll() {
      return this.user.findMany(
       {
         orderBy: {
          createdAt: 'desc'
         }
       }
      )
    }

  // update(id: number, updateUserDto:UpdateUserDto){
  //   return this.user.update({
  //     where: { id },
  //     data: updateUserDto,
  //   })
  // }
  findOne() {
    return this.user.findFirst;
  }

  remove(id: number) {
    return this.user.delete({where: {id}});
  }
}
