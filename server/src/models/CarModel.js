const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    amount: Number,
    category: String,
    marca: String,
    name: String,
    age: Number,
    color: [String],
    price: String,
    transmission: String,
    description: String,
    image: String,
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;