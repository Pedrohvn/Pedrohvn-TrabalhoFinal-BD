import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'access_logs'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_log')
      table.dateTime('date_log')
      table.string('action')
      table.integer('id_user').unsigned().references('user.id_user')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
