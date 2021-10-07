const express = require('express');
const app = express();
const http = require('http').createServer(app);

module.exports = function(app) {
    app.get('/api', (req, res) => {
        res.json({ data: 'Hello from NodeJS API' });
    });
}

require('./controllers/Chat.controllers')(http);

http.listen(8000, () => console.log('Server is fired up and running on port 8000'));