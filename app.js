const cookieParser = require("cookie-parser");
const express = require("express");
const jwt = require("jsonwebtoken")                            //jwt토큰 사용
//const authMiddleware = require("./middlewares/auth-middleware");    //미들웨어 파일 가져오기
const app = express();
const router = express.Router();
const SECRET_KEY = `customized-secret-key`;
const routes = require('./routes');



app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));
// app.use("/api",express.urlencoded({extended:false}), router)
app.use('/api', routes);
let tokenObject = {};//리프레시 토큰을 저장할 오브젝트  어렵다

// const { Op } = require("sequelize");            //SQL 사용
// const { User } = require("./models");
// const { Post } = require("./models");
// const { Comment } = require("./models");        //관계는 포기

// ====================================================여기서부터 API






app.listen(8080, () => {
    console.log("서버 가동");
  });
