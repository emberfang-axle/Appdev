const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

db.connect(err => {
  if (err) console.log(err);
  else console.log('MySQL Connected');
});

app.get('/', (req, res) => {
  res.send('API Running');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
