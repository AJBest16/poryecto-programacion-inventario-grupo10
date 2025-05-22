import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class SupplierService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  create(createSupplierDto: CreateSupplierDto) {
    return this.supplier.create({
      data: createSupplierDto
    })
  }

  findAll() {
    return this.supplier.findMany({
      orderBy: {
        createdAt: 'asc'
      }
    })
  }

  findOne() {
    return this.supplier.findFirst()
  }

  // update(id: number, updateSupplierDto: UpdateSupplierDto) {
  //   return `This action updates a #${id} supplier`;
  // }

  remove(id: number) {
    return this.supplier.delete({where: {id}})  }
}
