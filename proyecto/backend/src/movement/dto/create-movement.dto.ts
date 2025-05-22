import {  IsNumber, IsString } from "class-validator";

export class CreateMovementDto {
    @IsNumber()
    quantity: number;
    @IsString()
    reason: string;
}
