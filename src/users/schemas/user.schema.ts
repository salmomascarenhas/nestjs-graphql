import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type UsersDocument = User & Document

@Schema()
export class User {
    @Prop()
    name: string

    @Prop()
    surname: string

    @Prop()
    age: number
}

export const UserSchema = SchemaFactory.createForClass(User)
