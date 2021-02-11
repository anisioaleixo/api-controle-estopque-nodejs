exports.up = knex => knex.schema.createTable('parcelascompra', table => {
    table.increments('pco_cod')
    table.decimal('pco_valor')
    table.timestamp('pco_datapagto')
    table.timestamp('pco_datavecto')
    table.integer('com_cod')

    table.timestamps(true, true)
})

exports.down = knex => knex.schema.dropTable('parcelascompra')