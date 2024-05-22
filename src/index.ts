import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
    console.log('Server running on port: 8080');
});


const MONGO_URL = 'mongodb+srv://thanhtruong1901:uit123456@cluster0.jfn8nad.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) =>{
    console.log(error);
})