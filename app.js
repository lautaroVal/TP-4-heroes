const express = require("express");
const app = express();
const path = require("path");


app.use(express.static('public'));

app.listen(3030, () => console.log('Server runing in http://localhost:' + 3030))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './views/index.html')));
app.get('/Bach', (req, res) => res.sendFile(path.join(__dirname, './views/babbage.html')));
app.get('/davinci', (req, res) => res.sendFile(path.join(__dirname, './views/berners-lee.html')));
app.get('/hawking', (req, res) => res.sendFile(path.join(__dirname, './views/clarke.html')));
app.get('/Napoleon', (req, res) => res.sendFile(path.join(__dirname, './views/hamilton.html')));
app.get('/Nietzsche', (req, res) => res.sendFile(path.join(__dirname, './views/hopper.html')));
app.get('/Salomon', (req, res) => res.sendFile(path.join(__dirname, './views/lovelace.html')));
app.get('/Yousafzai', (req, res) => res.sendFile(path.join(__dirname, './views/turing.html')));



