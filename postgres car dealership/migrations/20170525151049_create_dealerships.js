exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('dealerships', function(table){
        table.increments('id').primary();
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
        table.string('make');
        table.string('city');
        table.string('province');
        table.string('postal_code');
        table.string('street');
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('dealerships')
  
};