const Flight = require('../model/flight');

module.exports = {
    index,
    new: newFlight,
    create,
};

async function index(request, respond) {
  console.log('flights index controller triggered')
    const flights = await Flight.find({});
    respond.render('flights/index', { title: 'All flights', flights }); 
    
}

function newFlight(request, respond) {
    // We'll want to be able to render an  
    // errorMsg if the create action fails
    respond.render('flights/new', { title: 'Add Flight', errorMsg: '' });
  };

  async function create(request, respond) {
  console.log(request.body);
  for (let key in request.body) { // Remove empty properties so that defaults will be applied
    if (request.body[key] === '') delete request.body[key];
  }
  try {
    await Flight.create(request.body);
    respond.redirect('/flights'); // Always redirect after CRUDing data
  } catch (err) { // Typically some sort of validation error
    
    console.log(err);
    respond.render('flights/new', { errorMsg: err.message });
  }
}