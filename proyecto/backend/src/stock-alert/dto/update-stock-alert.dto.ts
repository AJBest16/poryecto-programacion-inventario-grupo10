import { PartialType } from '@nestjs/mapped-types';
import { CreateStockAlertDto } from './create-stock-alert.dto';
import { IsBoolean } from 'class-validator';

export class UpdateStockAlertDto extends PartialType(CreateStockAlertDto) {
    @IsBoolean()
    active: boolean
}
