import { Inject } from "@nestjs/common"
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql"
import { UsersService } from "../../users/users.service"
import { User } from './User.entity'

@Resolver(() => User)
export class UsersResolver {

    constructor(@Inject(UsersService) private usersService: UsersService) {

    }

    @Query(() => User, { name: 'user' })
    async userById(@Args('id') id: string): Promise<User> {

        return await this.usersService.findOne(id)
    }

    @Query(() => [User])
    async users(): Promise<User[]> {
        return await this.usersService.findAll()
    }


    // @Mutation()
    // async create(): Promise<User> {
    //     return await this.usersService.create()
    // }

}