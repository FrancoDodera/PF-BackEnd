const DeleteUser = require('../../controllers/users/deleteUser')

const DeleteUserHandler=async(req,res)=>{
    const id= req.params.id
    try {
        const response=await DeleteUser(id)
        return res.status(202).send(response)
    } catch (error) {
        return res.status(404).send(error)
    }
    

}

module.exports=DeleteUserHandler