import { Body, Controller, Get, Post } from '@nestjs/common'
import { User } from '../entities/user/User.entity'
import { CreateUserDto } from './dto/create-user-dto'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {

        return this.usersService.create(createUserDto)
    }

    @Get()
    async getAll(): Promise<User[]> {
        return this.usersService.findAll()
    }
}
