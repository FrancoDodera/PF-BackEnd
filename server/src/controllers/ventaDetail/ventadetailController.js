const SaleDetail = require("../../models/VentaDetailModel")


const postSaleDetail=async(info)=>{
    const {id_venta,id_car,amount,subtotal}=info
    try { 
        const Detail =  new SaleDetail({
        id_venta:id_venta,
        id_car:id_car,
        amount:amount,
        subtotal:subtotal
    })
    await Detail.save()
        
    } catch (error) {
        throw error
    }
}

const deleteSaleDetail=async(id)=>{
    try {
        const cd =await  SaleDetail.findOne({_id:id})
    
    if (cd.status===true)  {
        await SaleDetail.updateOne({_id:id},{status:false})
        return('status changed in false')
    }else{
        await SaleDetail.updateOne({_id:id},{status:true})
        return('status changed in true')
    }
    } catch (error) {
        throw error
    }
    
 
}

const getSaleSetailBySale= async (id)=>{
    try {
        const allDetails= await SaleDetail.find({id_venta:id})
        return allDetails
    } catch (error) {
        throw error
    }

}

module.exports={
    postSaleDetail,
    deleteSaleDetail,
    getSaleSetailBySale
}