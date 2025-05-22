import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateStockAlertDto } from './dto/create-stock-alert.dto';
import { UpdateStockAlertDto } from './dto/update-stock-alert.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class StockAlertService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  
  create(createStockAlertDto: CreateStockAlertDto) {
    return this.stockAlert.create({
      data: createStockAlertDto,
    })
  }

  findAll() {
    return this.stockAlert.findMany({
      orderBy: {
        createdAt: 'asc'
      }
    })
  }

  findOne() {
    return this.stockAlert.findFirst()
  }

  update(id: number, UpdateStockAlertDto:UpdateStockAlertDto){
     return this.user.update({
        where: { id },
        data: UpdateStockAlertDto,})}

  remove(id: number) {
    return this.stockAlert.delete({where: {id}})
  }
}
