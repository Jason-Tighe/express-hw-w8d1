const express = require('express');
const app = express();
const fs = require('fs');//file system

app.engine('hypatia', (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    const rendered = content.toString()
      .replace('#author#', '<title>' + options.author + '</title>')
      .replace('#title#', '<h1>' + options.title + '</h1>')
      .replace('#lineOne#','<div>'+ options.lineOne + '</div>' )
      .replace('#lineTwo#','<div>'+ options.lineTwo + '</div>' )
      .replace('#lineThree#','<div>'+ options.lineThree + '</div>' )
      .replace('#lineFour#','<div>'+ options.lineFour + '</div>' )
      .replace('#image#',`${options.img}`)
    return callback(null, rendered)
  })
})
app.set('views', './views')
app.set('view engine', 'hypatia')

//scheming templates
app.get('/poem-1', (req, res) => {
  res.render('scheming', { author: 'Ian Johnson', title: 'Code', lineOne: 'My code fails.', lineTwo: 'I do not know why.', lineThree:'My code works.', lineFour:'I do not know why.' })
})

app.get('/poem-2', (req, res) => {
  res.render('scheming', { author: 'Scott Hannen', title: 'Peer Reviewed', lineOne: "It's going to work!", lineTwo: "Not again, my code has bugs.", lineThree: "I don't unit test.", lineFour:"" })
})

app.get('/poem-3', (req, res) => {
  res.render('scheming', { author: 'Namir', title: 'Work Passion Play', lineOne: "Make it work", lineTwo: "Make it readeble", lineThree: "Make it efficient.", lineFour:"" })
})

app.get('/poem-4', (req, res) => {
  res.render('scheming', { author: 'Nancy Deschenes', title: 'If Statement', lineOne: "Code, code, what if? code! ", lineTwo: "Code, what if? code! what if? code.", lineThree:"Didn't think of that", lineFour:""})
})

app.get('/poem-5', (req, res) => {
  res.render('scheming', { author: 'Jason Tighe', title: 'Spaghetti', lineOne: "So much sauce on here.", lineTwo: "Nothing is working, oh no.", lineThree: "Where does this begin?", lineFour:"" })
})


//funny templates
app.get('/meme-1', (req, res) => {
  res.render('funny', { author: 'FollowerFormat', title: 'Programming Humor:', img: "https://i.redd.it/e9b6md30y2471.png" })
})

app.get('/meme-2', (req, res) => {
  res.render('funny', { author: 'anakin padme ', title: 'Programming Humor:', img: "https://i.redd.it/p2gp7rm2a2471.png" })
})

app.get('/meme-3', (req, res) => {
  res.render('funny', { author: 'Tweet', title: 'Programming Humor:', img: 'https://i.redd.it/o33ryb4zfc6z.jpg' })
})

app.get('/meme-4', (req, res) => {
  res.render('funny', { author: 'MichaelScott', title: 'Programming Humor:', img: 'https://i.redd.it/wudbck9rhuw61.jpg' })
})

app.get('/meme-5', (req, res) => {
  res.render('funny', { author: 'GrandPa', title: 'Programming Humor:', img: 'https://i.redd.it/e02gucp3mu271.jpg' })
})


app.listen(4000, function(){
  console.log('Listening on port 4000')
})
