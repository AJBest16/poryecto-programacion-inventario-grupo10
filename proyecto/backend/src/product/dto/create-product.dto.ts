import { IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    name: string;
    @IsString()
    description: string;
    @IsString()
    unit: string;
    @IsString()
    location: string;
}
