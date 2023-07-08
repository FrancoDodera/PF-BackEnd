const User = require("../../models/UserModel")

const renoveUser=async(id)=>{
    try {
        const document=await User.findByIdAndUpdate(id, { status: true }, { new: true })
        console.log(document)
         return document
     } catch (error) {
         throw error
     }
}

module.exports=renoveUser