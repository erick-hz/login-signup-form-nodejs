const express = require('express')
const app = express()
const path = require("path")
const hbs = require('hbs')

const templatePath = path.join(__dirname, '../tempelates')

app.use(express.json())
app.set('view engine', 'hbs')
app.set('views', templatePath)


app.get('/', (req, res) => {
    res.render('login');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
