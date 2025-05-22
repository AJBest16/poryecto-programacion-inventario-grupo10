import { IsNumber } from "class-validator"

export class CreateStockAlertDto {

    @IsNumber()
    productId: number
    @IsNumber()
    threshold: number
}
