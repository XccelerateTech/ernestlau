exports.up = function(knex,Promise){
    return knex.schema.createTable('accounts',(table)=>{
      table.increments();
      table.string("username");
      table.boolean("active");
      table.integer('balance');
      table.timestamps(false,true);
    });
  }
  
  exports.down = function(knex,Promise){
    return knex.schema.dropTable('accounts');
  }