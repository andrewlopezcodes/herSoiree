require('dotenv').config();





const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors')
const herSoireeRoutes = require('./routes/herSoirees');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (request, response) => {
  response.send('herSoiree: Slash route is running');
});

app.use('/herSoirees', herSoireeRoutes)

app.listen(process.env.PORT, () => {
  console.log(`herSoiree: Application is listening on port no. ${process.env.PORT}...`)
});
