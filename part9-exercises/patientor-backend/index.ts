import 'dotenv/config';
import express from 'express';
import routes from './src/routes';
import cors from 'cors';

const PORT = process.env.PORT;

const app = express();

app.use(cors<express.Request>());

app.use(express.json());

app.use(routes);

app.listen(PORT, (): void => console.log(`Server running on Port ${PORT}`));