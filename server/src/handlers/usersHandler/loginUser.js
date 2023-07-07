const loginUser=require('../../controllers/users/loginUser')

const LoginUser=async(req,res)=>{
    const body=req.body
    try {
        const response=await loginUser(body)
        return res.status(202).send(response)
    } catch (error) {
        return res.status(404).send(error)
    }
}

module.exports=LoginUser