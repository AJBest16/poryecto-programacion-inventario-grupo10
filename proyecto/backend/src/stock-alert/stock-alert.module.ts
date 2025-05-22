import { Module } from '@nestjs/common';
import { StockAlertService } from './stock-alert.service';
import { StockAlertController } from './stock-alert.controller';

@Module({
  controllers: [StockAlertController],
  providers: [StockAlertService],
})
export class StockAlertModule {}
