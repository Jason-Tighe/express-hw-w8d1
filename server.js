const express = require('express');
const app = express();
const fs = require('fs');//file system

app.engine('hypatia', (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>')
      .replace('#content#','<div>'+ options.content + '</div>' )
    return callback(null, rendered)
  })
})
app.set('views', './views')
app.set('view engine', 'hypatia')

//scheming templates
app.get('/poem-1', (req, res) => {
  res.render('scheming', { title: 'Ian Johnson', message: 'Code', content: 'My code fails. I do not know why. My code works. I do not know why.' })
})

app.get('/poem-2', (req, res) => {
  res.render('scheming', { title: 'Scott Hannen', message: 'Peer Reviewed', content: "It's going to work! Not again, my code has bugs. I don't unit test." })
})

app.get('/poem-3', (req, res) => {
  res.render('scheming', { title: 'Namir', message: 'Work Passion Play', content: 'Make it work, Make it readeble, Make it efficient.' })
})

app.get('/poem-4', (req, res) => {
  res.render('scheming', { title: 'Nancy Deschenes', message: 'If Statement', content: "Code, code, what if? code! Code, what if? code! what if? code. Didn't think of that" })
})

app.get('/poem-5', (req, res) => {
  res.render('scheming', { title: 'Jason Tighe', message: 'spaghetti', content: "So much sauce on here. Nothing is working, oh no. Where does this begin" })
})


//funny templates
app.get('/meme-1', (req, res) => {
  res.render('funny', { title: 'We The Best', message: 'Who!', content: 'We Taking Over, Major Key Alert, Yall know who it is, All I do is win' })
})

app.get('/meme-2', (req, res) => {
  res.render('funny', { title: 'We The Best', message: 'Who!', content: 'We Taking Over, Major Key Alert, Yall know who it is, All I do is win' })
})

app.get('/meme-3', (req, res) => {
  res.render('funny', { title: 'We The Best', message: 'Who!', content: 'We Taking Over, Major Key Alert, Yall know who it is, All I do is win' })
})

app.get('/meme-4', (req, res) => {
  res.render('funny', { title: 'We The Best', message: 'Who!', content: 'We Taking Over, Major Key Alert, Yall know who it is, All I do is win' })
})

app.get('/meme-5', (req, res) => {
  res.render('funny', { title: 'We The Best', message: 'Who!', content: 'We Taking Over, Major Key Alert, Yall know who it is, All I do is win' })
})


app.listen(4000, function(){
  console.log('Listening on port 4000')
})
