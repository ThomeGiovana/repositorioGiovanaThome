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
app.post('/competencias/delete', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');

    var db = new sqlite3.Database(DBPATH);
    let msg;
	let id = req.query["id"];

	const sql = "DELETE FROM competencias WHERE id=?";

	db.all(sql, [id], (err, rows) => {
		if (err)
			throw err;
		else
			msg = "Competência removida!";
        res.send(msg)
	});
    db.close();
});

// UPDATE
//     var sql = "";
app.post('/competencias/update', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');

    var db = new sqlite3.Database(DBPATH);
    let msg;
	let id = req.query["id"];
    let competencia = req.query["competencia"];

	const sql = "UPDATE competencias SET competencia=? WHERE id=?";

	db.run(sql, [competencia, id], (err, rows) => {
		if (err)
			throw err;
		else
			msg = "Competência alterada!";
        res.send(msg)
	});
    db.close();
});

// CREATE
app.post('/competencias/create', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');

    var db = new sqlite3.Database(DBPATH);
    let msg;
    let competenciaNova = req.query["competenciaNova"];

	const sql = "INSERT INTO competencias (competencia) VALUES (?)";

	db.run(sql, [competenciaNova], (err, rows) => {
		if (err)
			throw err;
		else
			msg = "Competência adicionada!";
        res.send(msg)
	});
    db.close();
});