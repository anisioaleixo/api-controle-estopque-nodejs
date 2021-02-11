exports.up = knex => knex.schema.createTable('subcategoria', table => {
    table.increments('scat_cod')
    table.string('scat_nome',100)
    table.integer('cat_cod')
    
    table.timestamps(true, true)
})

exports.down = knex => knex.schema.dropTable('subcategoria')