const mongoose = require('mongoose');

    const saleSchema = new mongoose.Schema({
    id_user:{
        type:String
    },
    description:{
        type:String
    },
    date:{
        type:Date
    },
    total:{
        type: Number
    },
    status:{
        type:Boolean,
        default: true
    }

})

const Sale = mongoose.model('Sale', saleSchema);

module.exports= Sale