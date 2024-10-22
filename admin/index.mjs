import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();

const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

app.get('/', (req, res) => {
  res.sendFile(path.join(_dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
