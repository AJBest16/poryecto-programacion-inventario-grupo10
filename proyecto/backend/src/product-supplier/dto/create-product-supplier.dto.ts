import { IsString } from "class-validator";

export class CreateProductSupplierDto {
    @IsString()
    name: string;
}
