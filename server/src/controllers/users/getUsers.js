const User = require("../../models/Users")

const GetUsers=async()=>{
    try {
        const users= await User.find({ status: true })
        return users
    } catch (error) {
        throw error
    }
}

module.exports=GetUsers