import express from 'express';
import cors from "cors";
import "express-async-errors";
import { appError } from './middlewares/appError.middleware';

//

const app = express();
const allowedOrigins = [
    "http://localhost:4200",
    "http://localhost:4201",
  ];
  const options: cors.CorsOptions = {
    origin: allowedOrigins,
  };


app.use(cors());
app.use(express.json());
// app.use(router)
app.use(appError);

app.use(express.json())