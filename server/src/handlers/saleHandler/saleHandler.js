const {postSale, deleteSale, getAllSales, getSaleById,deleteCar} = require('../../controllers/sale/saleController')
const Sale = require('../../models/SaleModel')
const Detail= require('../../models/VentaDetailModel')
const {postSaleDetail}=require('../../controllers/ventaDetail/ventadetailController')


const postSaleHandler =async (req, res) => {
    const {id_user, description, date, status, id_car} = req.body
    try {
        if (!id_user || !description || !date) {
            return res.status(400).json({ error: 'all fields required' });
        }

          const sale= await Sale.find({id_user:id_user, description: 'in cart'})
        const id_venta= sale[0]._id
        console.log(id_venta)
        let sumaTotal=0
        const totales= await Detail.find({id_venta:id_venta})
        totales.map(sale=>{sumaTotal+=(sale.subtotal*sale.amount)})
        
       
        if (sale.length===0) {
            await postSale(id_user, description, date, sumaTotal)
        }else{
            await Sale.findOneAndUpdate({id_user:id_user, description: 'in cart'},{total:sumaTotal})
        }


       
        const existSaleDetail= await Detail.find({id_car:id_car, id_venta:id_venta})
           
        if (existSaleDetail.length===0) {
            await postSaleDetail(id_venta,id_car,)
        }else{
            
            await Detail.findOneAndUpdate({id_car:id_car, id_venta:id_venta},{ $inc: { amount: 1 } },{ new: true })
            
        }
        


        
        
        const saleDetail= await Detail.find({id_venta:id_venta})
        
        return res.status(200).send(saleDetail)
    } catch (error) {
        res.status(500).json({ error: `cannot create sale`})
    }
}



const deleteSaleHandler = async (req, res) => {
    const {id} = req.params
    try {
        await deleteSale(id)
        console.log('sale deleted successfully');
        res.status(200).json('sale deleted successfully')
    } catch (error) {
        res.status(500).json({error: 'Error deleting sale'})
    }
}
const getAllSalesHandler = async (req, res) => {
    try {
        const sales = await getAllSales()
        res.status(200).json(sales)
    } catch (error) {
        res.status(500).json({error: 'Error getting sales'})
    }
}
const getSaleByIdHandler = async (req, res) => {
    const {id} = req.params
    try {
        const sale = await getSaleById(id)
        let id_sale= sale[0]._id
        const details = await Detail.find({id_venta:id_sale})
        res.status(200).json(details)
    } catch (error) {
        res.status(500).json({error: `Error getting sale`})
    }
}


const DeleteCar=async (req,res)=>{
    try {
        const {id_user, description,date,id_car}=req.body
        const sale = await Sale.find({id_user:id_user, description: 'in cart'})
    
        const id= sale[0]._id
        const deti= await Detail.find({id_venta:id, id_car:id_car})
        console.log(deti[0].amount>1)
        let id_detail= deti[0]._id
        if (deti[0].amount===1) {
            await Detail.findByIdAndDelete(id_detail)
        }
        if (deti[0].amount>1) {
            
           const s=await Detail.findOneAndUpdate({_id:id_detail}, { $inc: { amount: -1 } }, { new: true })
        }
        let sumaTotal=0
        const totales= await Detail.find({id_venta:id})
        totales.map(sale=>{sumaTotal+=(sale.subtotal*sale.amount)})
        await Sale.findOneAndUpdate({id_user:id_user, description: 'in cart'},{total:sumaTotal})

        res.status(200).send(totales)
    } catch (error) {
        res.status(400).send(error)
    }
    


}


module.exports = {
    postSaleHandler,
    deleteSaleHandler,
    getAllSalesHandler,
    getSaleByIdHandler,
    DeleteCar
}