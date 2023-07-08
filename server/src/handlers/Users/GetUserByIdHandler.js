const getUserById= require('../../controllers/users/getUserById')

const GetUserById =async(req,res)=>{
    const id = req.params.id
   
    try {
       const user=await getUserById(id)
       return res.status(200).send(user)
    } catch (error) {
        return res.status(400).send(error)
    }
}

module.exports=GetUserById