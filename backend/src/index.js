const express = require('express'); //requiring a package

const routes = require('./routes'); //requiring a file

const app = express();


app.use(express.json());
app.use(routes); 

app.listen(3333);




