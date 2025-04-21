import express from 'express';
import './app/extensions/common.ts'; 
import bodyParser from 'body-parser';
import cors from 'cors';
const app : any = express();

app.options('*', cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(bodyParser.json());

import router from './app/routes/Routes.ts';


require('dotenv').config().parsed;
const api_prefix = "/api";
// Use routes

app.use(api_prefix, router);


export default app;
export { express };


