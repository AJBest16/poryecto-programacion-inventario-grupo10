import { IsString } from "class-validator"

export class CreateSupplierDto {
    @IsString()
    name:        string
    @IsString()
    contactInfo: string
    @IsString()
    email:       string
    @IsString()
    phone:       string
}
