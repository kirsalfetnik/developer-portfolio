require('dotenv').config();

const express = require('express');
const path = require('path');

// express app
const app = express();
const server = require('http').createServer(app);

// middleware
app.use(express.json());

app.use((req, res, next) => {
    // console.log(req.path, req.method);
    next();
});


//*********************** Deployment *******************

const __dirname1 = path.resolve();
if(process.env.NODE_ENV === 'production') {

    app.use(express.static(path.join(__dirname1, "/frontend/build")));

    app.get('*', (req, res) => {
        const index = path.join(__dirname1, 'frontend', 'build', 'index.html');
        res.sendFile(index);
    })
} else {
    app.get("/", (req, res) => {
        res.send("API is running successfully");
    })
}

//*********************** Deployment *******************

server.listen(process.env.PORT, () => {
    console.log('listening for requests on port', process.env.PORT)
});

