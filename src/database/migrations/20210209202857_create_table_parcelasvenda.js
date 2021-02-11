exports.up = knex => knex.schema.createTable('parcelasvenda', table => {
    table.increments('ven_cod')
    table.integer('pve_cod')
    table.decimal('pve_valor')
    table.timestamp('pco_datavecto')
    table.timestamp('pve_datavecto')

    table.timestamps(true, true)
})

exports.down = knex => knex.schema.dropTable('parcelasvenda')