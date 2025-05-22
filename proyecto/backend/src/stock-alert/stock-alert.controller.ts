import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StockAlertService } from './stock-alert.service';
import { CreateStockAlertDto } from './dto/create-stock-alert.dto';
import { UpdateStockAlertDto } from './dto/update-stock-alert.dto';

@Controller('stock-alert')
export class StockAlertController {
  constructor(private readonly stockAlertService: StockAlertService) {}

  @Post()
  create(@Body() createStockAlertDto: CreateStockAlertDto) {
    return this.stockAlertService.create(createStockAlertDto);
  }

  @Get()
  findAll() {
    return this.stockAlertService.findAll();
  }

  // @Get()
  // findOne() {
  //   return this.stockAlertService.findOne();
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStockAlertDto: UpdateStockAlertDto) {
    return this.stockAlertService.update(+id, updateStockAlertDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockAlertService.remove(+id);
  }
}
