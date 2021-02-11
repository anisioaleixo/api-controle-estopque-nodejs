exports.up = knex => knex.schema.createTable('itensvenda', table => {
    table.increments('itv_cod')
    table.decimal('itv_qtde',7,3)
    table.decimal('itv_valor')
    table.integer('ven_cod')
    table.integer('pro_cod')

    table.timestamps(true, true)
})

exports.down = knex => knex.schema.dropTable('itensvenda')