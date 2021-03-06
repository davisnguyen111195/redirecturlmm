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
    let link = 'http://ouo.io/s/eQvRL1Ie?s=' + req.query.url
    res.redirect(link)
    next()
})

app.get('/goou', (req, res, next) => {
     let linkou = 'http://ouo.io/s/eQvRL1Ie?s=' + req.query.url
     res.redirect(linkou)
     next()
})

app.get('/home', (req, res) => {
    console.log('HOME')
})
app.listen(port, () => {
    console.log('App listening on port ' + port)
})