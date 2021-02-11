exports.up = knex => knex.schema.alterTable('itensvenda', table => {
    table.foreign('ven_cod')
        .references('venda.ven_cod')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

    table.foreign('pro_cod')
        .references('produto.pro_cod')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
})

exports.down = knex => knex.schema.alterTable('itensvenda', table => {
    table.dropForeign('ven_cod')
    table.dropForeign('pro_cod')
})
