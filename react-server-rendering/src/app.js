import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server'
import Home from './components/Home'
let app = express()
app.use(express.static('public', {
  etag: true,
  maxAge: 604800000
}))
app.set('views', './views')
app.set('view engine', 'jade')
let html = ReactDOM.renderToString(React.createFactory(Home)())
app.get('/', (req, res) => {
  res.render('index', {react: html})
})
app.listen(3000, () => {
  console.log('listen on 3000')
})
