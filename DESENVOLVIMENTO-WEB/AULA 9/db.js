const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./banco.db');

db.serialize(()=>{

    db.run(`CREATE TABLE IF NOT EXISTS tarefas(
        id integer primary key autoincrement,
        nome varchar(100)
        )`
    );
});

module.exports = db;


