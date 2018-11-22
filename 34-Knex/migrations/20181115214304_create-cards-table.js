exports.up = function(knex,Promise){
    return knex.schema.createTable('cards',(table)=>{
        table.increments();
        //refer to cardholder, one card can only have one cardholder.
        table.integer('account_id');
        table.foreign('account_id').references('accounts.id');
        table.string("type");
    });
}

exports.down = function(knex,Promise){
    return knex.schema.dropTable("cards")
}