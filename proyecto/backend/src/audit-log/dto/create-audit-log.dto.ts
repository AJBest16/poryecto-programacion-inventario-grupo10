import { IsNumber, IsString } from "class-validator"

export class CreateAuditLogDto {
    @IsString()
    action:    string
    @IsNumber()
    userId:    number
    @IsString()
    details:   string
}
