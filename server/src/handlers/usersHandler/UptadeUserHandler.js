const uptadeUser=require('../../controllers/users/uptadeUser')

const Uptadeuser=async(req,res)=>{
    const user= req.body
    try {
       const newUser= await uptadeUser(user)
       return res.status(200).send(newUser)
    } catch (error) {
        return res.status(404).send(error)
    }

    }

module.exports = Uptadeuser