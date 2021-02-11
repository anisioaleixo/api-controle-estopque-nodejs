exports.up = knex => knex.schema.createTable('tipopagamento', table => {
    table.increments('tpa_cod')
    table.string('tpa_nome',50)

    table.timestamps(true, true)
})

exports.down = knex => knex.schema.dropTable('tipopagamento')