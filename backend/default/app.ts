import express from 'express';
import './app/extensions/common.ts';
import bodyParser from 'body-parser';
import cors from 'cors';
const app: any = express();

const allowedOrigins = [
  '/',
  'mysissoft.site',
  'localhost',
  '127.0.0.1',
];

// const corsOptions = {
//   origin: (origin, callback) => {
//     // If the origin is in the allowed list, allow the request
//     if ( allowedOrigins.includes(origin) || allowedOrigins.some((url) => origin?.includes(url)) || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   credentials: true, // Enable credentials for cookies/auth headers
//   allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
//   exposedHeaders: ['Content-Type', 'Authorization'],
//   methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
// };

// app.use(cors(corsOptions));


var corsOptions2 = function(req, res, next){ 
  res.header('Access-Control-Allow-Origin', '*'); 
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 
  'Content-Type, Authorization, Content-Length, X-Requested-With');
   next();
}

app.use(corsOptions2);


app.use(bodyParser.json());

import router from './app/routes/Routes';

import dotenv from 'dotenv';

dotenv.config().parsed;
const api_prefix = '/api';
// Use routes

app.use(api_prefix, router);


export default app;
export { express };
