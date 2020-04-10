let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');

let server = express();
let data = [{
  id: Date.now(),
  nickname: 'awdawd',
  message: 'awfsejhefkdawhkl'
}]

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
  extended: true
}));

server.listen(8081, function(){
  console.log('IT\'S WORKING!');
})

server.post('/message', function(req, res) {
  console.log(req.body)
  let message = {
    id: Date.now(),
    nickname: req.body.nickname,
    message: req.body.message
  }
  data.push(message)
  return res.status(200).send(JSON.stringify((message.id)))
});

server.get('/message', function(req, res) {
  return res.status(200).send(JSON.stringify(data))
});