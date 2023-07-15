const {postSale, deleteSale, getAllSales, getSaleById} = require('../../controllers/sale/saleController')

const postSaleHandler =async (req, res) => {
    const {id_user, description, date, total, status} = req.body
    try {
        if (!id_user || !description || !date || !total) {
            return res.status(400).json({ error: 'all fields required' });
        }
        const sale = await postSale(id_user, description, date, total, status)
        res.status(201).json(sale)
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
        res.status(200).json(sale)
    } catch (error) {
        res.status(500).json({error: `Error getting sale`})
    }
}
module.exports = {
    postSaleHandler,
    deleteSaleHandler,
    getAllSalesHandler,
    getSaleByIdHandler
}