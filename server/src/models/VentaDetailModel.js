const mongoose = require('mongoose');

    const ventaDetailSchema = new mongoose.Schema({
    id_venta:{
        type:String
    },
    id_car:{
        type:String
    },
    
    total:{
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

const VentaDetail = mongoose.model('VentaDetail', ventaDetailSchema);

module.exports= VentaDetail