const mongoose = require('mongoose');

    const SaleDetailSchema = new mongoose.Schema({
    id_venta:{
        type:String
    },
    id_car:{
        type:String
    },
    
    amount:{
        type: Number
    },
    subtotal:{
        type:Number
    },
    status:{
        type:Boolean,
        default: true
    }

})

const SaleDetail = mongoose.model('SaleDetail', SaleDetailSchema);

module.exports= SaleDetail