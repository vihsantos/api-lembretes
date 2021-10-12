
const express = require('express');
const app = express();
const morgan = require('morgan');


const routeLembretes = require('./routes/lembretes');
const {sequelize} = require('./models')

app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

sequelize.sync().then(()=>{
    console.log('banco de dados conectado')
})

app.use((req, res, next)=>{
    res.header('Acess-Control-Alow-Origin', '*');
    res.header('Acess-Control-Alow-Header',
        'Origin, X-Requrested-With, COntent-Type, Accept, Authorization');

        if(req.method === 'OPTIONS'){
            res.header('Acess-Control-Alow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).send({});
        }

        next();
});

app.use('/lembretes', routeLembretes);


module.exports = app;
