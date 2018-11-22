exports.up = function(knex, Promise) {
    return knex.schema.table('notes', function(table) {
        table.renameColumn('context', 'content');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.table('notes', function(table) {
        table.renameColumn('content', 'context');
    });
  };