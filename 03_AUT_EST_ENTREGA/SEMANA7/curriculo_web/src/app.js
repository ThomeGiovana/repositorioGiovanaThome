// recursos
const express = require('express');
const res = require('express/lib/response');
const sqlite3 = require('sqlite3');

// cria o servidor 
const app = express();

app.use(express.json());

const hostname = '127.0.0.1';
const port = 3000;
app.use(express.static("frontend"));

// "ouve" a conexão com o servidor 
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

const DBPATH = 'backend/banco.db';

// READ
app.get('/competencias/read', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH);
    var sql = 'SELECT * FROM competencias';
    db.all(sql, [], (err, row) => {
        if (err) {
            throw err;
        }
        res.json(row);
    });
    db.close();
});

// READ
app.get('/formacaoAcademica', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH);
    var sql = 'SELECT * FROM formacaoAcademica';
    db.all(sql, [], (err, row) => {
        if (err) {
            throw err;
        }
        res.json(row);
    });
    db.close();
});

// READ
app.get('/informacoesContato', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH);
    var sql = 'SELECT * FROM informacoesContato';
    db.all(sql, [], (err, row) => {
        if (err) {
            throw err;
        }
        res.json(row);
    });
    db.close();
});

// DELETE
app.delete('/competencias/delete', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH);
    var sql = "DELETE FROM competencias WHERE competencia='Competência teste'";
    db.run(sql, [], (err, row) => {
        if (err) {
            throw err;
        }
        else{
            res.send("Competência teste deletada!");
        }
    });
    db.close();
});

// UPDATE
app.patch('/competencias/update', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH);
    var sql = "UPDATE competencias SET competencia='Competência alterada' WHERE competencia='Competência teste 2'";
    db.run(sql, [], (err, row) => {
        if (err) {
            throw err;
        }
        res.send("Alteração efetuada com sucesso!");
    });
    db.close();
});

// CREATE
app.post('/competencias/create', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = "INSERT INTO competencias (competencia) VALUES ('Competência teste')";
    db.run(sql, [], (err, row) => {
        if (err) {
            throw err;
        }
        else{
            res.send("Competência teste deletada!");
        }
    });
    db.close();
});