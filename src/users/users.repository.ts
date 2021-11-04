import { Repository, EntityRepository } from 'typeorm'
import { User } from '../entities/user/User.entity'

@EntityRepository(User)
export class UsersRepository extends Repository<User> { }