exports.up = knex=> knex.schema.createTable('produto', table=>{
    table.increments('pro_cod')
	table.string('pro_nome',100)
	table.string('pro_descricao',255)
	table.string('pro_foto',255)
	table.decimal('pro_valorpago')
	table.decimal('pro_valorvenda')
	table.decimal('pro_qtde',7,3)
	table.integer('umed_cod')
	table.integer('cat_cod')
	table.integer('scat_cod')

    table.timestamps(true,true)
})

exports.down = knex=> knex.schema.dropTable('produto')