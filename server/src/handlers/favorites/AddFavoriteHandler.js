const addFavorite=require('../../controllers/favorites/addFavorite')

const AddFavorite=(req,res)=>{
    const {id_user,id_car}=req.body
    try {
        addFavorite(id_user,id_car)
        return res.status(200).send('The favorite was added successfully')
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports=AddFavorite