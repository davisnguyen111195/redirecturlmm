const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()
const port = process.env.port || 8080;

app.use('/assets', express.static(__dirname + "/public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(morgan('dev'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/go', (req, res, next) => {
    let link = 'https://123link.co/st?api=671277a48e917f3de5c2b1cd4bec64e89fb6844f&url=' + req.query.url
    res.redirect(link)
    next()
})

app.get('/home', (req, res) => {
    console.log('HOME')
})
app.listen(port, () => {
    console.log('App listening on port ' + port)
})