const GetUsers=require('../../controllers/users/getUsers')

const GetUsersHandler=async(req,res)=>{
try {
    const users= await GetUsers()
    return res.status(200).send(users)
} catch (error) {
    return res.status(400).send(error)
}
}

module.exports=GetUsersHandler