import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Users {
    @Prop()
    name:string


    @Prop()
    email:string

    @Prop()
    phone:string

    @Prop()
    zip:string
}


export const UsersSchema = SchemaFactory.createForClass(Users)