exports.up = knex=> knex.schema.createTable('categoria', table=>{
    table.increments('cat_cod')
    table.string('cat_nome',100)   
    table.timestamps(true,true)
})

exports.down = knex=> knex.schema.dropTable('categoria')