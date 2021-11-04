import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: process.env.POSTGRES_DB,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: false,
}