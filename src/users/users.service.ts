import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateUserDto } from './dto/create-user-dto'
import { User, UsersDocument } from './schemas/user.schema'

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UsersDocument>,
    ) { }

    async createUser(createUserDto: CreateUserDto): Promise<User> {

        const createdUser = new this.userModel(createUserDto)

        return createdUser.save()
    }

    async findAllUser(): Promise<User[]> {
        return this.userModel.find().exec()
    }
}
