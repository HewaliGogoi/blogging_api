const http = require('http');
const PORT = 9001;
const app = require('./controllers/app');
const newConnect = require('./config/dbConnect');

http.createServer(app).listen(PORT, async () => {
    await newConnect();
    console.log(`Listening to port ${PORT}...`);
})