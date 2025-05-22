import { IsString } from "class-validator";

export class CreateMovementTypeDto {
    @IsString()
    name: string;
}
