const renoveUser=require('../../controllers/users/renoveUser')

const RenoveUserHandler=async(req,res)=>{
    const id= req.params.id
    
    try {
        const response=await renoveUser(id)
        console.log(response)
        return res.status(202).send(response)
    } catch (error) {
        return res.status(404).send(error)
    }
}

module.exports=RenoveUserHandler