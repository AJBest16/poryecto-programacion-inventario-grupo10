import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class CategoryService extends PrismaClient implements OnModuleInit{
  async onModuleInit() {
    await this.$connect();
  }
  create(createCategoryDto: CreateCategoryDto) {
    return this.category.create({
      data: createCategoryDto
    })
  }

  findAll() {
    return this.category.findMany({
      orderBy: {
        createdAt: 'asc'
      }
    })
  }

  findOne() {
    return this.category.findFirst()  }

  // update(id: number, updateCategoryDto: UpdateCategoryDto) {
  //   return `This action updates a #${id} category`;
  // }

  remove(id: number) {
    return this.category.delete({where: {id}})
  }
}
