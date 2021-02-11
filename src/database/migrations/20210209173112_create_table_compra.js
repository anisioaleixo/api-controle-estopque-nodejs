exports.up = knex=> knex.schema.createTable('compra', table=>{
    table.increments('com_cod')
    table.timestamp('com_data')
    table.integer('com_nfiscal')   
    table.decimal('com_total')   
	table.integer('com_nparcelas')
	table.string('com_status')
	table.integer('for_cod')
	table.integer('tpa_cod') 

    table.timestamps(true,true)
})

exports.down = knex=> knex.schema.dropTable('compra')