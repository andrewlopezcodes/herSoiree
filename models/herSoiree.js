const knex = require('../database');

const index = () =>
  knex('herSoirees')
    .where('id', id)
    .then(rows => rows[0])
    .catch(error => {console.error(error); });

const show = id =>
  knex('herSoirees')
    .returning('*')
    .then(rows => rows[0])
    .catch(error =>{console.error(error); });

const create = (data) =>
  knex('herSoirees')
  .returning('*')
  .insert(data)
  .then(rows => rows[0])
  .catch(error =>{console.error(error); });

const update = (id, data) =>
  knex('herSoirees')
    .returning('*')
    .insert(data)
    .then(rows => rows[0])
    .catch(error =>{console.error(error); });

const destroy = id =>
  knex('herSoirees')
    .returning('*')
    .where('id', id)
    .del()
    .then(rows => rows[0])
    .catch(error =>{console.error(error); });



module.exports ={
  index,
  show,
  create,
  update,
  destroy
}
