const mongoose = require('mongoose');

    const ReviewSchema = new mongoose.Schema({
    id_user:{
        type:String
    },
    id_car:{
        type:String
    },
    coment:{
        type:String
    },
    value:{
        type:Number
    }
})

const Review = mongoose.model('Review', ReviewSchema);

module.exports= Review