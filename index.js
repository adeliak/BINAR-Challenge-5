const express = require('express')
const fs = require('fs')
const { uuid } = require('uuidv4')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', './public/views')

app.use(express.static(__dirname + '/public'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) =>  res.render('main'))
app.get('/game', (req, res) =>  res.render('game'))
app.get('/login', (req, res) => res.render('login'))
app.get('/register', (req, res) => res.render('register'))

app.post('/register', (req, res) => {
    const { email, password } = req.body
    const data = fs.readFileSync('./data/user.json', 'utf-8')
    const dataParsed = JSON.parse(data)
    const hashedPassword = bcrypt.hashSync(password, 10)
    const newUser = {
      id: uuid(),
      email,
      hashedPassword
    }
    dataParsed.push(newUser)
    fs.writeFileSync('./data/user.json', JSON.stringify(dataParsed, null, 4))
    res.redirect('/login')
})

app.post('/login', (req, res) => {
    const { email, password } = req.body
    const data = JSON.parse(fs.readFileSync('./data/user.json', 'utf-8'))
    const userMatch = data.find((item) => item.email == email)
    if (!userMatch) {
        res.redirect('/login')
    } else {
        bcrypt.compare(password, userMatch.hashedPassword, function(err, result) {
            // result == true
            console.log(result, err)
            if (result) {
                const token = jwt.sign({
                    email: userMatch.email,
                    id: userMatch.id
                }, 'secret', {
                    expiresIn: 86400 
                })

                res.cookie('jwt', token, { maxAge: 86400000 })
                res.redirect('/')
            } else {
                res.redirect('/login')
            }
        });

    }
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
