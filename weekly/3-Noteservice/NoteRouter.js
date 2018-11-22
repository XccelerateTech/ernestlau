const express = require('express');

class NoteRouter {
    constructor(noteService) {
        this.noteService = noteService;
    }

    router() {
        let router = express.Router();
//method one
        router.get('/', this.get.bind(this));
        router.post('/', this.post.bind(this));
        router.put('/:id', this.put.bind(this));
        router.delete('/:id', this.delete.bind(this));


        //method two
        // router.get('/', (req, res) => {
        //     return this.noteService.list(req.auth.user)
        //         .then((notes) => res.json(notes))
        //         .catch((err) => res.status(500).json(err));
        // })


        // router.post('/', (req, res) => {
        //     return this.noteService.add(req.body.note, req.auth.user)
        //         .then(() => this.noteService.list(req.auth.user))
        //         .then((notes) => res.json(notes))
        //         .catch((err) => res.status(500).json(err));
        // })

        // router.put('/:id', (req, res) => {
        //     return this.noteService.update(req.params.id, req.body.note, req.auth.user)
        //         .then(() => this.noteService.list(req.auth.user))
        //         .then((notes) => res.json(notes))
        //         .catch((err) => res.status(500).json(err));
        // })

        // router.delete('/:id', (req, res) => {
        //     return this.noteService.remove(req.params.id, req.auth.user)
        //         .then(() => this.noteService.list(req.auth.user))
        //         .then((notes) => res.json(notes))
        //         .catch((err) => res.status(500).json(err));
        // })

        return router; //allow the methods (get, put, post and delete) to be used. 
    }

    get(req, res){
        return this.noteService.list(req.auth.user)
        .then((notes)=> res.json(notes))
        .catch((err)=> res.status(500).json(err));
    }

    post(req, res) {
        return this.noteService.add(req.body.note, req.auth.user)
            .then(() => this.noteService.list(req.auth.user))
            .then((notes) => res.json(notes))
            .catch((err) => res.status(500).json(err));
    }

    put(req,res){
        return this.noteService.update(req.params.id, req.body.note, req.auth.user)
        .then(()=> this.noteService.list(req.auth.user))
        .then((notes) => res.json(notes))
        .catch((err)=> res.status(500).json(err));
    }

    delete(req, res){
        return this.noteService.remove(req.params.id, req.auth.user)
        .then(()=> this.noteService.list(req.auth.user))
        .then((notes)=> res.json(notes))
        .catch((err)=> res.status(500).json(err));
    }
}

module.exports = NoteRouter;