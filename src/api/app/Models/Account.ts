import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Account extends BaseModel {
  @column({ isPrimary: true })
  public id_account: number
  
  @column()
  public company_name: string

  @column()
  public fantasy_name: string

  @column()
  public document: number

  @column()
  public contact: string

  @column()
  public id_adress: number

  @column()
  public id_owner: number

  @column()
  public id_hq: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  
}
