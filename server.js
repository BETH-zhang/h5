var express = require('express');
var ejs = require('ejs');

var app = express();
app.set('views', __dirname + '');
app.use(express.static(__dirname + ''));
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);


// 启动服务器
app.get('*', function (req, res) {
  res.render('index.html', {});
});

app.listen(8880);
console.log("h5 starting on port: %d", 8880);