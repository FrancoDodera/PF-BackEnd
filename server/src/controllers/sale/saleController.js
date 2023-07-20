const Sale = require('../../models/SaleModel')
const User = require('../../models/UserModel')


const postSale = async (id_user, description, date, sumaTotal) => {

    const newSale = new Sale({
        id_user: id_user,
        description: description,
        date: date,
        total: sumaTotal,
    })
    const sale = await newSale.save()
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
    let allSales=[];
    const sales = await Sale.find()
    await Promise.all(
        sales.map(async(elem)=>{
            const dataUser=await User.findById(elem.id_user)
            const body={
                _id:elem._id,
                id_user:{
                    id:dataUser._id,
                    name:dataUser.name,
                    user:dataUser.user,
                    email:dataUser.email
                },
                description:elem.description,
                date:elem.date,
                total:elem.total,
                status:elem.status
            }
            allSales.push(body);
        })
    )
    return allSales
}
const getSaleById = async (id) => {
    const sale = await Sale.find({id_user:id})
    return sale
}

const deleteCar=()=>{}

module.exports = {
    postSale,
    deleteSale,
    getAllSales,
    getSaleById,
    deleteCar
}