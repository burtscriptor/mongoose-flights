const Flights = require('../model/flight');

module.exports = {
    index,
};

async function index(request, respond) {
    const flights = await Flights.find({});
    respond.render('flights/index', { flights }); // sends all the information stored in const flights to views/flights/index
}