import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateMovementDto } from './dto/create-movement.dto';
import { UpdateMovementDto } from './dto/update-movement.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class MovementService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  
  create(createMovementDto: CreateMovementDto) {
    return this.movement.create({
      data: createMovementDto,
    })  }

  findAll() {
    return this.movement.findMany({
      orderBy: {
        createdAt: 'asc'
      }
    })
  }

  findOne() {
    return this.movement.findFirst()
  }

  // update(id: number, updateMovementDto: UpdateMovementDto) {
  //   return `This action updates a #${id} movement`;
  // }

  remove(id: number) {
    return this.movement.delete({where: {id}})
  }
}
