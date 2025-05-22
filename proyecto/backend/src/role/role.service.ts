import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class RoleService extends PrismaClient implements OnModuleInit{
  
  async onModuleInit() {
    await this.$connect();
  }
  
  create(createRoleDto: CreateRoleDto) {
   return this.role.create({
    data: createRoleDto
   })
  }

  findAll() {
    return this.role.findMany({
      orderBy:{
        createdAt: 'asc'
      }
    })
  }

  findOne() {
    return this.role.findFirst();
  }

  // update(id: number, updateRoleDto: UpdateRoleDto) {
  //   return `This action updates a #${id} role`;
  // }

  remove(id: number) {
    return this.role.delete({where:{id}})};
}
