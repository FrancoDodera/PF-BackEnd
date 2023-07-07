const User = require("../../models/Users")

const loginUser=async({user,password})=>{
    try {
        const document=await User.findOne({user:user,password:password})
        if(document){
            return {acces:true,data:document}
        }
        return {acces:false,message:'invalid data'}

    } catch (error) {
         throw error
    }
}

module.exports=loginUser