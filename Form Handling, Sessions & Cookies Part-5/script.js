// form handling and working with the forms
// handle backend process of forms and making sure the data coming from any frontend,
// lib, fw, templating engines, we still handle it at the backend

// what is session and cookie?
// cookie is something stored on frontend i.e in ur browser, that u get from server as when ur logged in
// with a id like "abcd" attached to your request means 'req+abcd'

// session is a time/thread where you are logged in and also with server, when this
// session ends/logged out then new session begins

const express = require('express')
const app = express()

// Session and Cookie
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// Above 2 lines explanation
// When data or information is transferred from browser to server
// then at that time it doesn't give your data as plain text but as blob, which is a mixture of everything
// tumne toh bheja tha plain text par server ko mila blob which is not directly readable ab is cheez ko handle
// karna padega ki hum us blob ko waapas se readable kar sake

app.get('/', function (req, res) {
  res.send('champion mera anuj')
})

app.get('/about', function (req, res) {
    res.send('about page hai yeh')
  })

  app.get('/profile', function (req, res, next) {
    return next(new Error("Not Implemented"))
  })

  app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

app.listen(3000)