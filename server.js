(function() {

    var jsonServer = require('json-server');
    var data = require('./data')

// Returns an Express server
    var server = jsonServer.create();

// Set default middlewares (logger, static, cors and no-cache)
    server.use(jsonServer.defaults());

// Custom routes
    server.get('/analyze/surveys/:id/crosses', function(req, res) {
      console.log(data.crosses)
      res.send(data.crosses)
    })

// Returns an Express router
    var router = jsonServer.router('db.json');
    server.use(router);

    server.listen(3030);
    console.log("Mock node backend listening on port 3030 - http://localhost:3030");
}());
