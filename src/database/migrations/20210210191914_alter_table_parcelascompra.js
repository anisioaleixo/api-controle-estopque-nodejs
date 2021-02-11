exports.up = knex => knex.schema.alterTable('parcelascompra', table => {
    table.foreign('com_cod')
        .references('compra.com_cod')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    
})

exports.down = knex => knex.schema.alterTable('parcelascompra', table => {
    table.dropForeign('com_cod')
})
