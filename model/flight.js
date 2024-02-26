const mongoose = require('mongoose');
// This is a shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: { 
        type: String,
        enum: ['American', 'Southwest', 'United', 'Qantas', 'Jetstar' ]
    },

    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'CCH'],
        default: 'DEN',
    },

    flightNo: {
        type: Number,
        required: true,
        min: 2,
        max: 9999,
    },
    departs: {
    type: Date,
    default: function() {
       return new Date(+new Date() + 365*24*60*60*1000)
    },    
}});

module.exports = mongoose.model('Flight', flightSchema);