import express from 'express';
import diaryRouter from './routes/diaries';
import cors from 'cors'

const PORT = 3001;

const app = express();

app.use(cors())

app.use(express.json());

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.json('pong');
});

app.use('/api/diaries', diaryRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});