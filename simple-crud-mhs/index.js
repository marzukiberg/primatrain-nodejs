const express = require('express');
const app = express();
require('./db/connection');
const homeRouter = require('./routes/mahasiswa');

app.use(express.json());
app.use('/api', homeRouter);

app.listen(3000);
