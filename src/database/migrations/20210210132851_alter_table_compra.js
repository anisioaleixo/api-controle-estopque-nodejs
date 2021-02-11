exports.up = knex => knex.schema.alterTable('compra', table => {
    table.foreign('for_cod')
        .references('fornecedor.for_cod')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

    table.foreign('tpa_cod')
        .references('tipopagamento.tpa_cod')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
})

exports.down = knex => knex.schema.alterTable('compra', table => {
    table.dropForeign('for_cod')
    table.dropForeign('tpa_cod')
})
