import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty()
    name:String

    @ApiProperty()
    email:String

    @ApiProperty()
    phone:String

    @ApiProperty()
    zip:String
}
