const verifyUser=require('../../controllers/users/verifyUser')

const VerifyUser=async(req,res)=>{
    const body=req.body
    
    try {
        const response=await verifyUser(body)
        return res.status(202).send(response)
    } catch (error) {
        return res.status(404).send(error)
    }
}

module.exports=VerifyUser