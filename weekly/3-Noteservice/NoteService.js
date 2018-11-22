class NoteService {
    constructor(knex){
        this.knex = knex;
    }

    add(note, user){
        let query = this.knex  
            .select('id')
            .from('users')
            .where('users.username', user);

            return query.then((rows)=>{
                if(rows.length === 1){
                    return this.knex.insert({
                        content: note,
                        user_id: rows[0].id
                    }).into('notes');
                } else {
                    throw new Error('Cannot update a note from non-existent user');
                }
            });
    }

    list(user){
        if(typeof user !== 'undefined'){
            let query = this.knex.select('notes.id', 'content')
            .from('notes')
            .innerJoin('users', 'notes.user_id', 'users.id')
            .where('users.username', user);
            
            return query.then((rows)=>{
                console.log(rows)
                return rows.map(r =>({
                    id: r.id,
                    content: r.content
                }));
            });
        } else {
            let query = this.knex.select('users.username', 'notes.id', 'content')
                .from('notes')
                .innerJoin('users', 'notes.user_id', 'users.id');

                return query.then((rows)=>{
                    console.log(rows)
                    const result = {};
                    rows.forEach(r => {
                        if(typeof result[r.username] === 'undefined'){
                            result[r.username] = [];
                        }
                        result[r.username].push({
                            id:r.id,
                            content: r.content
                        });
                    });
                    return result;
                });
        }
    }

    update(id, note, user){
        let query = this.knex  
            .select('id')
            .from('users')
            .where('users.username', user);


        return query.then((rows=>{
            if(rows.length === 1){
                return this.knex('notes')
                .where('id', id)
                .update({
                    content: note,
                });
            } else {
                throw new Error('Cannot update a note that doesnt exist');
            }
        }));
    }

    remove(id, user){
        let query = this.knex  
            .select('id')
            .from('users')
            .where('users.username', user);

            return  query.then((rows)=>{
            if(rows.length === 1){
                return this.knex('notes')
                    .where('id', id)
                    .del();
            } else {
                throw new Error ('No such user')
            }
        })

        
        
    }
}

module.exports = NoteService;