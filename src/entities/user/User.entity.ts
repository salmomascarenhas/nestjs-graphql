import { Field, ObjectType } from "@nestjs/graphql"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@ObjectType()
@Entity("user", { schema: "public" })
export class User {

  @Field()
  @PrimaryGeneratedColumn({ type: "bigint", name: "id_usuario" })
  idUsuario: string

  @Field()
  @Column("text", { name: "nome" })
  nome: string

  @Field()
  @Column("text", { name: "email" })
  email: string

  @Field()
  @Column("text", { name: "profissao" })
  profissao: string

  @Field()
  @Column("text", { name: "organizacao" })
  organizacao: string

  @Field()
  @Column("text", { name: "atuacao" })
  atuacao: string

  @Field()
  @Column("boolean", { name: "verificado", default: () => "false" })
  verificado: boolean
}
