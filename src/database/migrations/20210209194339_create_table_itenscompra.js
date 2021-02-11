exports.up = knex => knex.schema.createTable('itenscompra', table => {
    table.increments('itc_cod')
    table.decimal('itc_qtde',7,3)
    table.decimal('itc_valo')
    table.integer('com_cod')
    table.integer('pro_cod')

    table.timestamps(true, true)
})

exports.down = knex => knex.schema.dropTable('itenscompra')