const User = require("../../models/Users")

const verifyUser=async({email})=>{
    try {
        const document=await User.findOne({email:email})
        if(document){
            return {acces:true,data:document}
        }
        return {acces:false}
    } catch (error) {
         throw error
    }
}

module.exports=verifyUser