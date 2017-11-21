var mongoose = require('mongoose');

var placeSchema = new mongoose.Schema({
    longitude: {
       type: Number,
       required: true
   },
    latitude: {
        type: Number,
        required: true
    }
});

var Place = module.exports = mongoose.model('Model', placeSchema, 'place');

Place.getPlaces = function(callback, limit) {
    Place.find(callback).limit(limit);
}