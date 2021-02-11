exports.up = knex=> knex.schema.createTable('usuario', table=>{
    table.increments('usr_cod')
    table.string('usr_nome',100)
    table.string('usr_login',50)
    table.string('usr_senha',100)
    table.boolean('usr_ativo')
    table.timestamps(true,true)
})

exports.down = knex=> knex.schema.dropTable('usuario')