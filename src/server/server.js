const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());

app.use(cors());

const PORT = 3535;

app.listen(PORT, () => console.log('We Listnin on ' + PORT));
