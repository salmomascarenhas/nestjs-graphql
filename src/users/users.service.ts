import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from '../entities/user/User.entity'
import { CreateUserDto } from './dto/create-user-dto'
import { plainToClass } from 'class-transformer'

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User)
    private usersRepository: Repository<User>,
    ) { }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const data = plainToClass(User, createUserDto)
        return await this.usersRepository.save(data)

    }
    findAll(): Promise<User[]> {
        return this.usersRepository.find()
    }

    findOne(id: string): Promise<User> {
        return this.usersRepository.findOne(id)
    }

    async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id)
    }

}
