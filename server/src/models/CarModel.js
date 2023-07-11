const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    amount: Number,
    idCategory: String,
    idMarca: String,
    name: String,
    age: Number,
    color: [String],
    price: Number,
    status:String,
    transmission: String,
    description: String,
    image: String,
    active:{type:Boolean,
    default:true
    }
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;