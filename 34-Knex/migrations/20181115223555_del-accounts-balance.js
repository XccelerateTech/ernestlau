exports.up = function(knex,Promise){
        return knex.schema.table('accounts',(table)=>{
        table.dropColumn('balance');
      })
}

exports.down = function(knex,Promise){
    return knex.schema.table('accounts',(table)=>{
        table.integer('balance');
  })
}