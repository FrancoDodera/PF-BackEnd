const User = require("../../models/UserModel");


const DeleteUser = async(id)=>{
    try {
       const document=await User.findByIdAndUpdate(id, { status: false }, { new: true })
        return document
    } catch (error) {
        throw error
    }
}

module.exports=DeleteUser