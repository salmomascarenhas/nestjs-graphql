import { Body, Controller, Get, Post } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user-dto'
import { User } from './schemas/user.schema'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    async findAllUser(): Promise<User[]> {
        return this.usersService.findAllUser()
    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        console.log(createUserDto)


        return this.usersService.createUser(createUserDto)
    }
}
