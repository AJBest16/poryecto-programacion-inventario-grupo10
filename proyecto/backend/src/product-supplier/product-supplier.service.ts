import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateProductSupplierDto } from './dto/create-product-supplier.dto';
import { UpdateProductSupplierDto } from './dto/update-product-supplier.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class ProductSupplierService extends PrismaClient implements OnModuleInit{
  async onModuleInit() {
    await this.$connect();
  }
 
  create(createProductSupplierDto: CreateProductSupplierDto) {
    return this.productSupplier.create({
      data: createProductSupplierDto
    })  }

  findAll() {
    return this.productSupplier.findMany({
      orderBy:{
        createdAt: 'asc'
      }
    })  }

  findOne() {
    return this.productSupplier.findFirst()
  }

  // update(id: number, updateProductSupplierDto: UpdateProductSupplierDto) {
  //   return `This action updates a #${id} productSupplier`;
  // }

  remove(id: number) {
    return this.productSupplier.delete({where:{id}})  }
}
