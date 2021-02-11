exports.up = knex => knex.schema.alterTable('produto', table => {
    table.foreign('umed_cod')
        .references('undmedida.umed_cod')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

    table.foreign('cat_cod')
        .references('categoria.cat_cod')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

    table.foreign('scat_cod')
        .references('subcategoria.scat_cod')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

})

exports.down = knex => knex.schema.alterTable('produto', table => {
    table.dropForeign('umed_cod')
    table.dropForeign('cat_cod')
    table.dropForeign('scat_cod')
})
