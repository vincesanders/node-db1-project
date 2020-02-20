const express = require('express');

const accountsRouter = require('./accounts/accountsRouter');

const server = express();

server.use(express.json());

server.use('/api/accounts', accountsRouter);

server.get('/test', (req, res) => {
    res.status(200).json({ message: 'This has been a test.' });
});

module.exports = server;