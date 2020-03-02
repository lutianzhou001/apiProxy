var express = require('express'),
    request = require('request'),
    app = express();

var r = request.defaults({'proxy':'http://127.0.0.1:8332'});
function apiProxy() {
    return function (req, res, next) {
        console.log(req)
	console.log(req.method);
        r.get(req.url).pipe(res);    
    }
}

app.use(apiProxy());

app.listen(8080, function () {
    'use strict';
    console.log('Listening...');
});
