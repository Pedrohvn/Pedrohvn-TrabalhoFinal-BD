import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import AccessLog from './AccessLog'

export default class User extends BaseModel {
  @hasOne(()=> AccessLog)
  public accessLog: HasOne<typeof AccessLog>

  @column({ isPrimary: true })
  public id_user: number

  @column()
  public email: string

  @column()
  public password: string

  @column()
  public full_name: string

  @column()
  public cpf: string

  @column()
  public birth_date: Date

  @column()
  public gender: string
  
  @column()
  public type: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
