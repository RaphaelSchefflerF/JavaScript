const express = require('express');
const db = require('./db');
const app = express();

app.get('/', (req,res)=>{
    res.json({mensagem:'Ola, mundo!'});
});

app.get('/tarefas', (req,res)=>{
    db.all('SELECT * FROM tarefas', (erro, tarefas )=>{
        if (erro != null){
            console.log(erro);
            res.status(500).json({mensagem:'Erro no servidor'})
        }
        else{res.json(tarefas);
        }

    });
});

app.listen(3030,()=>{
    console.log('Servidor executando em localhost:3030')
});