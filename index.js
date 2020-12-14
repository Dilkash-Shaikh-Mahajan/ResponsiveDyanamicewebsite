const express = require('express');
const app = express();
require('./src/db/conn');
const User = require('./src/models/contact');
const path = require('path');
const hbs = require('hbs');

const staticPath = path.join(__dirname, 'public');
const templatePath = path.join(__dirname, 'templates/views');
const partialPath = path.join(__dirname, 'templates/partials');

app.use(express.urlencoded({ extended: false }));
app.use(
    '/css',
    express.static(path.join(__dirname, './node_modules/bootstrap/dist/css')),
);
app.use(
    '/js',
    express.static(path.join(__dirname, './node_modules/bootstrap/dist/js')),
);
app.use(
    '/jq',
    express.static(path.join(__dirname, './node_modules/jquery/dist')),
);
//static folder
app.use(express.static(staticPath));

//Setting the view engines
app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialPath);

// Route for Home Page
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/services', (req, res) => {
    res.render('services');
});
app.get('/gallary', (req, res) => {
    res.render('gallary');
});
app.post('/register', async(req, res) => {
    try {
        const userResponse = new User(req.body);
        console.log(userResponse.date);
        await userResponse.save();
        res.status(201).render('index');
    } catch (error) {
        res.status(500).send(error);
    }
});
//Route for Contact Page
app.get('/contact', (req, res) => {
    res.render('contact');
});
app.listen(3000, () => {
    console.log('App is Start at 3000 port');
});