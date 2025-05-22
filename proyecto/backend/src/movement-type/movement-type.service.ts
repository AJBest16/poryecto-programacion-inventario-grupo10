import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateMovementTypeDto } from './dto/create-movement-type.dto';
import { UpdateMovementTypeDto } from './dto/update-movement-type.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class MovementTypeService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  create(createMovementTypeDto: CreateMovementTypeDto) {
    return this.movementType.create({
      data: createMovementTypeDto,
    })  }

  findAll() {
    return this.movementType.findMany(
      {
        orderBy:{
          createdAt: 'asc'
        }
      }
    )
  }

  findOne() {
    return this.movementType.findFirst()
  }

  // update(id: number, updateMovementTypeDto: UpdateMovementTypeDto) {
  //   return `This action updates a #${id} movementType`;
  // }

  remove(id: number) {
    return this.movementType.delete({where: {id}})
  }
}
