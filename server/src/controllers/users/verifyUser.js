const User = require("../../models/UserModel")

const verifyUser=async({user})=>{
    try {
        const document=await User.findOne({user:user})
        if(document){
            return {acces:true,data:document}
        }
        return {acces:false}
    } catch (error) {
         throw error
    }
}

module.exports=verifyUser