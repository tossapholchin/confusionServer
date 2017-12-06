const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the leaders to you!');
})
.post((req, res, next) => {
    res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
})
.delete((req, res, next) => {
    res.end('Deleting all leaders');
});

leaderRouter.route('/:leaderId')
.get((req,res,next) => {
    res.end('Will send leader ' + req.params.leaderId + ' to you!');
})
.post((req, res, next) => {
  res.statusCode = 403;
  res.end('Post operation not supported on /leaders/:leaderId');
})
.put((req, res, next) => {
    res.end('Update leaderId:' + req.params.leaderId  + ' with name: ' + req.body.name + ' and details: ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting leader:' + req.params.leaderId );
});

module.exports = leaderRouter;