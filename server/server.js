import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';

import connection from './database/db.js';
import DefaultData from './default.js';
import router from './routes/route.js';

const app=express();
dotenv.config();

app.use(cors({
    origin: ["https://openup-frontend.onrender.com/"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',router);
app.get("/",(req,res) =>{
    res.setHeader("Access-Control-Allow-Credentials","true");
    res.send("API is running");
});
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://openup-frontend.onrender.com');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
const PORT= 8000;

const USERNAME= process.env.DB_USERNAME;
const PASSWORD= process.env.DB_PASSWORD;
const URL=`mongodb+srv://${USERNAME}:${PASSWORD}@openup.6bciesu.mongodb.net/?retryWrites=true&w=majority`;
connection(URL);

app.get('/protected', authenticateToken, (req, res) => {
    // If the middleware passes, the user is authenticated
    res.json({ message: 'Protected route accessed successfully' });
  });
  
  function authenticateToken(req, res, next) {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  
    if (!token) return res.status(401).json({ error: 'Unauthorized' });
  
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err){
        if (err.name === 'TokenExpiredError') {
          // Token has expired
          return res.status(401).json({ error: 'Token expired' });
        } else {
          // Other JWT verification errors
          return res.status(403).json({ error: 'Forbidden' });
        }
      }
  
      req.user = user;
      next();
    });
  }
app.listen(PORT,() => console.log('server is running'));

DefaultData();


