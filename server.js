const express = require("express");
const path = require('path');

const friendsRouter = require('./routes/friends.router')
const messagesRouter = require('./routes/messages.router')

const PORT = 3000;
const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'))


app.use((req, res, next) => {
  const start = Date.now();
  next();
  const time = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ms:${time}`);
});

app.use('/site',express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index', {
    title :"Interesting",
    caption: "Ypeee Ypeee",
  });
});

app.use('/friends',friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
})