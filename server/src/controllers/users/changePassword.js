const User = require("../../models/UserModel")


const changePassword=async (credentials)=>{
    const {id,password,newPassword}=credentials
    
    try {
        const user=await User.findById(id);
        if(user.password==null){
            await User.updateOne({_id:id},{password:newPassword})
            return await User.findById(id)
        }else{
            if(user.password == password){
                await User.updateOne({_id:id},{password:newPassword})
                return await User.findById(id)
            }else{
                return {message:'Incorrect password'}
            }
        }
    } catch (error) {
        throw error
    }
}

module.exports=changePassword