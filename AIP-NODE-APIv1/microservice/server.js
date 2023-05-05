const express = require('express');
const cors = require('cors');
const app = express();
app.options('*', cors());

app.use(express.json());
app.use(cors());

const routes = require('./api_routes/routes');
routes(app);
//const port = process.env.PORT || 3000;
const port = 7790;

app.listen(port, '0.0.0.0', () => {
  console.log(`Listening to port http://localhost:${port}`);
});