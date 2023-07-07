const GetAllUsers=require('../../controllers/users/getAllUsers')

const GetUsersHandler=async(req,res)=>{
    try {
         const users= await GetAllUsers()
        
        return res.status(200).send(users)
    } catch (error) {
        res.status(400).send(error)
    }
    

}
module.exports=GetUsersHandler