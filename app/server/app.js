import path from 'path';
import express from 'express';

const app = express();

const publicPath = express.static(path.join(__dirname, '../'));
const indexPath = path.join(__dirname, '../index.htlm');

console.log(publicPath);
console.log(indexPath);

app.use(publicPath);

app.get('/', (req, res) => {
  res.sendFile(indexPath);
});

export default app;
