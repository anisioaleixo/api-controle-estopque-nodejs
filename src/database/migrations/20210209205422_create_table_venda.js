exports.up = knex => knex.schema.createTable('venda', table => {
    table.increments('ven_cod')
    table.timestamp('ven_data')
    table.integer('ven_nfiscal')
    table.decimal('ven_total')
    table.integer('ven_nparcelas')
    table.string('ven_status')
    table.integer('cli_cod')
    table.integer('tpa_cod')
    table.integer('ven_avista')

    table.timestamps(true, true)
})

exports.down = knex => knex.schema.dropTable('venda')