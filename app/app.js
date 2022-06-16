//모듈
const express = require('express');
const app = express();

//라우팅
const home = require('./src/routes/home'); //루트경로로 오면 홈으로 이동

//앱 세팅
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/src/public`)); //정적경로 추가 백틱으로 변수넘김
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', home);

module.exports = app;
