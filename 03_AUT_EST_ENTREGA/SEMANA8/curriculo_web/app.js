// recursos
const { urlencoded } = require('express');
const express = require('express');
const res = require('express/lib/response');
const sqlite3 = require('sqlite3');

// cria o servidor 
const app = express();

app.use(express.json()); // parse do BODY
app.use(express.urlencoded({ extended: false})); // parse da URL (query string)

const hostname = '127.0.0.1';
const port = 3000;
app.use(express.static("frontend"));

// "ouve" a conexão com o servidor 
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

const DBPATH = 'backend/banco.db';

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

// READ
app.get('/competencias/read', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH);
    var sql = 'SELECT * FROM competencias';
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        };
        // res.json(row);
        for(i=0; i<rows.length; i++){
            res.write('<div class="bloco"> <p class="info">' + rows[i].competencia + '</p> </div>');
        };
        db.close();
        res.end();
    });
});

// DELETE
app.post('/competencias/delete', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');

    var db = new sqlite3.Database(DBPATH);
	let competencia = req.body.competencia;

	const sql = "DELETE FROM competencias WHERE competencia=?";

	db.all(sql, [competencia], (err, rows) => {
		if (err)
			throw err;
		else
        res.write('<div style="text-align: center;"><a href="/HTML/competencias.html">VOLTAR</a></div>');
        db.close();
        res.end();
	});
});

// UPDATE
app.post('/competencias/update', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');

    var db = new sqlite3.Database(DBPATH);
	let oldCompetencia = req.body.oldCompetencia;
    let competencia = req.body.competencia;

	const sql = "UPDATE competencias SET competencia=? WHERE competencia=?";

	db.run(sql, [competencia, oldCompetencia], (err, rows) => {
		if (err)
			throw err;
		else
            res.write('<div style="text-align: center;"><a href="/HTML/competencias.html">VOLTAR</a></div>');
        db.close();
        res.end();
	});
});

// CREATE
app.post('/competencias/create', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');

    var db = new sqlite3.Database(DBPATH);
    let msg;
    let competenciaNova = req.body.competenciaNova;

	const sql = "INSERT INTO competencias (competencia) VALUES (?)";

	db.run(sql, [competenciaNova], (err, rows) => {
		if (err)
			throw err;
		else
            res.write('<div style="text-align: center;"><a href="/HTML/competencias.html">VOLTAR</a></div>');
        db.close();
        res.end();    
	});
});