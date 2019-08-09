const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const initializer = require('./initializer');

app.get('/tweet', initializer);

app.listen(port, () => console.log('server running'));