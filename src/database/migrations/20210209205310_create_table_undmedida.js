exports.up = knex => knex.schema.createTable('undmedida', table => {
    table.increments('umed_cod')
    table.string('umed_nome',50)

    table.timestamps(true, true)
})

exports.down = knex => knex.schema.dropTable('undmedida')