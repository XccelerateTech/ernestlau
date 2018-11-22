const express = require('express');
const hb = require('express-handlebars');
const basicAuth = require('express-basic-auth');
const bodyParser = require('body-parser');

const app = express();
const config = require('./config.json')[process.env.NODE_ENV || 'development'];

const AuthChallenger = require('./AuthChallenger');
const NoteService = require('./NoteService');
const NoteRouter = require('./NoteRouter');

const knexConfig = require('./knexfile').development;
const knex = require('knex')(knexConfig);

app.engine('handlebars', hb({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(basicAuth({
    authorizer: new AuthChallenger(knex),
    authorizeAsync: true,
    challenge: true,
    realm: 'Note Taking with knex'
}));

let noteService = new NoteService(knex);

app.get('/', function (req,res){
    noteService.list(req.auth.user).then(function(notes){
        res.render('index', {
            user: req.auth.user,
            notes: notes
        });
    });
});

app.use('/api/notes/', (new NoteRouter(noteService)).router());

app.listen(config.port, ()=> console.log(`Notes Taking app listening to port ${config.port}!`));

module.exports.app = app;