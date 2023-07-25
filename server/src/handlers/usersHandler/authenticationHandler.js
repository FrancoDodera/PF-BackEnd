const authentication=require('../../controllers/users/authentication')

const authenticationHandler=async(req,res)=>{
    const body= req.body
    try {
       const response= await authentication(body)
       return res.status(200).send(response)
    } catch (error) {
        return res.status(404).send(error)
    }

    }

module.exports = authenticationHandler