exports.up = knex => knex.schema.alterTable('venda', table => {
    table.foreign('cli_cod')
        .references('cliente.cli_cod')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    table.foreign('tpa_cod')
        .references('tipopagamento.tpa_cod')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
})

exports.down = knex => knex.schema.alterTable('venda', table => {
    table.dropForeign('cli_cod')
    table.dropForeign('tpa_cod')
})
