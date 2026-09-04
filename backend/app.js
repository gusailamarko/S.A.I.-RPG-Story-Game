import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

//Setting up path, and the dotenv injection
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, './.env') });

const app = express();
const PORT = process.env.PORT;

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../public')));

//Routers
import authRoutes from './routes/authRoutes.js';
app.use('/api/auth', authRoutes);
import genresRoutes from './routes/genresRoutes.js';
app.use('/api/genres', genresRoutes);
import storiesRoutes from './routes/storiesRoutes.js';
app.use('/api/stories', storiesRoutes);

//Error handling
import { errorHandler } from './middleware/error_handler.js';
app.use(errorHandler);

//Might be good to put this in a seperate 'server.js' file
app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`);
})