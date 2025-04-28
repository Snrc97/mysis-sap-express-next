import express from 'express';
import './app/extensions/common.ts';
import bodyParser from 'body-parser';
import cors from 'cors';
const app: any = express();

const allowedOrigins = [
  'http://localhost:8000',
  'http://localhost:3000',
  'https://mysissoft.site',
];

const corsOptions = {
  origin: (origin, callback) => {
    // If the origin is in the allowed list, allow the request
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Enable credentials for cookies/auth headers
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use(bodyParser.json());

import router from './app/routes/Routes';

import dotenv from 'dotenv';

dotenv.config().parsed;
const api_prefix = '/api';
// Use routes

app.use(api_prefix, router);

export default app;
export { express };
