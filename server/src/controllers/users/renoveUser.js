const User = require("../../models/UserModel")

const renoveUser=async(id)=>{
    try {
        const document=await User.findByIdAndUpdate(id, { status: true }, { new: true })
       
         return document
     } catch (error) {
         throw error
     }
}

module.exports=renoveUser