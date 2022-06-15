//모듈
const express = require('express');
const app = express();

//라우팅
const home = require('./routes/home'); //루트경로로 오면 홈으로 이동

//앱 세팅
app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/', home);

module.exports = app;
