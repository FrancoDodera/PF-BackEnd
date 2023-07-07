const mongoose = require('mongoose');

    const ventaSchema = new mongoose.Schema({
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

const Venta = mongoose.model('Venta', ventaSchema);

module.exports= Venta