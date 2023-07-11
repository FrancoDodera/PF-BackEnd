const {postSaleDetail,deleteSaleDetail,getSaleSetailBySale} =require('../../controllers/ventaDetail/ventadetailController')

const PostSaleDetail=(req,res)=>{
    try {
        postSaleDetail(req.body)
        return res.status(200).send('the detail of the sale was uploaded correctly')
    } catch (error) {
        return res.status(400).send(error)
    }
}

const DeleteSaleDetail=async(req,res)=>{
    const id=req.params.id
    
    try {
        const detail=await deleteSaleDetail(id)
        
        return res.status(200).send(detail)
        
    } catch (error) {
        return res.status(404).send(error)
    }

}

const GetSaleSetailBySale=async(req,res)=>{
    const id=req.params.id
    
    try {
        const detail=await getSaleSetailBySale(id)
        
        return res.status(200).send(detail)
        
    } catch (error) {
        return res.status(404).send(error)
    }
}

module.exports={
    PostSaleDetail,
    DeleteSaleDetail,
    GetSaleSetailBySale
}