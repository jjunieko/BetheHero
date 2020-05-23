export function up(knex) {
    return knex.schema.createTable('ongs', function(table){
        table.increments();
        
         table.string('title').primary();
         table .string('description').notNullable();
         table .decimal('value').notNullable();
  
        table.string('ong_id').notNullable();

        table.foreign('ing_id').references('id').inTable('ongs');
        });
  }
  
  export function down(knex) {
  return  knex.schema.dropTable('incidents');
  
  }