exports.up = knex => knex.schema.alterTable('itenscompra', table => {
    table.foreign('com_cod')
        .references('compra.com_cod')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

    table.foreign('pro_cod')
        .references('produto.pro_cod')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
})

exports.down = knex => knex.schema.alterTable('itenscompra', table => {
    table.dropForeign('com_cod')
    table.dropForeign('pro_cod')
})
