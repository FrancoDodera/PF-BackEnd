const Sale = require('../../models/SaleModel')
const User = require('../../models/UserModel')

const postSale = async (id_user, description, date, total, status) => {
    const user = await User.findById(id_user)
    const sale = new Sale({
        id_user: user,
        description: description,
        date: date,
        total: total,
        status: status
    })
    return sale
}
const deleteSale = async (id) => {
    const cd =await  Sale.findOne({_id:id})
    
    if (cd.status===true)  {
        await Sale.updateOne({_id:id},{status:false})
        return('status changed in false')
    }else{
        await Sale.updateOne({_id:id},{status:true})
        return('status changed in true')
    }
}
const getAllSales = async () => {
    const sales = await Sale.find()
    return sales
}
const getSaleById = async (id) => {
    const sale = await Sale.find({id_user:id})
    return sale 
}

module.exports = {
    postSale,
    deleteSale,
    getAllSales,
    getSaleById
}