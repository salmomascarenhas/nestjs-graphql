import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { ConfigModule } from '@nestjs/config'
import { UsersModule } from './users/users.module'
import { typeOrmConfig } from './config/typeorm.config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GraphQLModule } from '@nestjs/graphql'

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.development.env' }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
