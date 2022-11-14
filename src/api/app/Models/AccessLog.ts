import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class AccessLog extends BaseModel {
  @column({ isPrimary: true })
  public id_log: number

  @column()
  public date_log: DateTime

  @column()
  public action: string

  @column()
  public id_user: number
}
