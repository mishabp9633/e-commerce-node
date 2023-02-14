import express from "express";
import cors from "cors"
import dotenv from "dotenv"

import { initialize } from './database/connection.js';

import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import categoryRouter from './routes/category.route.js'
import subcategoryRouter from './routes/subcategory.route.js'


import {errorHandling} from './middlewares/error.middleware.js'

  await initialize()

  dotenv.config()
  const app = express()

  app.use(cors('*'));

  app.use(express.json({limit:"50mb"}))
  app.use(express.urlencoded({limit:"50mb",extended:true}))

  app.use(
    userRouter,
    authRouter,
    categoryRouter,
    subcategoryRouter
    )
 



  app.use(errorHandling)

  const port = process.env.PORT || 5000 ;
  app.listen(port , ()=>{
   console.log(`server listening at http://localhost:${port}`);
  })
 




















// import express from "express";
// import bodyParser from "body-parser";
// import cors from "cors";
// // import url from "url"
// import {router as calculationRoute} from "./calculation.js";
// // import router from "./calculation.js";
// import { initialize } from "./database/connection.js";

// //  var routes = express.Router()
// // var defaulteRoutes = require('./calculation');

// var app = express();
// var jsonParsor = bodyParser.json();
// app.use(cors({ origin: true, credentials: true }));

// //-----------------------db connection-------------------//
// await initialize()

// // calculationRoute(app, db)

// app.use('/calculation', calculationRoute)

// app.get("/", function (req, res) {
//   res.send("<h2>welcome guyss</h2>");
// });

// app.listen(8080, function () {
//   console.log("server started");
// });
