exports.up = knex => knex.schema.alterTable('subcategoria', table => {
    table.foreign('cat_cod')
        .references('categoria.cat_cod')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
})

exports.down = knex => knex.schema.alterTable('subcategoria', table => {
    table.dropForeign('cat_cod')
})
