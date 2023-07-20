const changePassword=require('../../controllers/users/changePassword')

const changePasswordHandler=async(req,res)=>{
    const credentials= req.body
    try {
       const newPassword= await changePassword(credentials)
       return res.status(200).send(newPassword)
    } catch (error) {
        return res.status(404).send(error)
    }

    }

module.exports = changePasswordHandler