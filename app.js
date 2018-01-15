const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./database.js').default;

console.log(db);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api', (req, res) => {
  res.json(db.getAll());
});

app.get('/api/:id', (req, res) => {
  const id = parseInt(req.params.id);
  res.json(db.get(id));
});

app.post('/api', (req, res) => {
  const data = req.body.data;
  if (db.add(data)) {
    res.json(db.getAll());
  }
  res.status(400);
  res.send();
});

app.put('/api', (req, res) => {
  const data = req.body;
  console.log(data);
  if (db.update(data)) {
    res.json(db.getAll());
  }
  res.status(400);
  res.send();
});

app.delete('/api', (req, res) => {
  const id = req.body.id;
  if (db.remove(id)) {
    res.json(db.getAll());
  }
  res.status = 400;
  res.send();
});

app.listen(3000, () => console.log('started the server on port 3000 ...'));
