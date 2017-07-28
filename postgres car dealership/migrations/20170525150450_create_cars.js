exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('cars', function (table) {
        table.increments('id').primary(); // adds incrementing int for id
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
        table.string('make').notNullable();
        table.string('model').notNullable();
        table.integer('year').notNullable();
        table.integer('dealership_id');
})  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users') // drop table when reverting
};

