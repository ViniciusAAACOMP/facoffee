const express = require('express');
const bodyParser = require('body-parser');
const subscribeRouter = require('./routes/sub/sub');
const unsubscribeRouter = require('./routes/sub/unsub');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/sub/sub', subscribeRouter);
app.use('/sub/unsub', unsubscribeRouter);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
