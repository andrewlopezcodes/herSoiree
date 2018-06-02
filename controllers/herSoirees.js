const herSoireeModel = require('../models/herSoiree');

const index = (request, response) => {
  herSoireeModel.index()
    .then(result => {
      response.send(result);
    })
    .catch(error => {console.error(error); });
}

const show = (request, response) =>{
  herSoireeModel.show(request.params.id)
    .then(result => {response.send(result); })
    .catch(error => {console.error(error); });
}

const create = (request, response) =>{
  herSoireeModel.create(request.body)
    .then(result => {response.send(result); })
    .catch(error => {console.error(error); });
}
const update = (request, response) =>{
  herSoireeModel.update(request.params.id, request.body)
    .then(result => {response.send(result); })
    .catch(error => {console.error(error); });
}
const destroy = (request, response) =>{
  herSoireeModel.destroy(request.params.id)
    .then(result => {response.send(result); })
    .catch(error => {console.error(error); });
}


module.exports ={
  index,
  show,
  create,
  update,
  destroy
}
