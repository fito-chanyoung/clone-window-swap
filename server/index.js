const express = require('express')
const router = require('./routes');

const app = express();
const PORT = process.env.PORT_NUM || 80;

app.use(express.json());

app.use('/',router);

app.listen(PORT, () => {
  console.log(`app listen in ${PORT}`)
})
