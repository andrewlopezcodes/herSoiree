const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);
const sql = knex('herSoiree').toString();
const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = process.envPORT || 3016;
console.log(sql);
knex.destroy()

app.use(morgan('dev'));
app.use(express.json());
app.get('/', (request, response)=> {
  response.send(`herSoiree: Listening on port no.${PORT}`)
});








app.listen(PORT, ()=>{
  console.log(`herSoiree: Listening on port no.${PORT}`)
});
