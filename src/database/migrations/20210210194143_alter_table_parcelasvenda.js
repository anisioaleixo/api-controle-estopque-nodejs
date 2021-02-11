exports.up = knex => knex.schema.alterTable('parcelasvenda', table => {
    table.foreign('ven_cod')
        .references('venda.ven_cod')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    
})

exports.down = knex => knex.schema.alterTable('parcelasvenda', table => {
    table.dropForeign('ven_cod')
})
