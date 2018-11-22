exports.up = function(knex, Promise) {
    return knex.schema.createTable('notes',(table)=>{
        table.increments();
        table.integer('user_id');
        table.foreign('user_id').references('users.id');
        table.string("context");
        table.timestamps(false,true);
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("notes")
  };