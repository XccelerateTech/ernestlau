exports.up = function(knex,Promise){
    return knex.schema.createTable('transcations',(table)=>{
        table.increments();
        table.integer('amount');
        //one transcation only involved in one card
        table.integer('card_id').unsigned();
        table.foreign('card_id').references('cards.id');
        //one account can involved in many transcations
        table.integer('account_id').unsigned();
        table.foreign('account_id').references('accounts.id');

    });
}

exports.down = function(knex,Promise){
    return knex.schema.dropTable("transcations")
}