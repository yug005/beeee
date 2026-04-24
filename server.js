import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  const message = 'Server running';
  res.send(message);
});

app.get('/test', (req, res) => {
  const data = 'test route';
  console.log(data);
  return res.send('OK');
});

app.listen(PORT, () => {
  console.log('Server started');
});

// this is in module type, but it can be done via commonjs type also
// for commonjs, we need to make .eslintrc.json file instead of eslint.config.js