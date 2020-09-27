import express from 'express';

const app = express();

app.all('/', (req, res) => {
  res.json({
    message: 'Hello World!',
    body: req.body,
    query: req.query,
    headers: req.headers,
  });
});

app.listen(3300, () => {
  console.log(`App listening at http://localhost:3300`)
});

