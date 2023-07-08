const User = require("../../models/UserModel")


const uptadeUser=async (usuario)=>{
    const {id,email,name,lastName,user,password,image}=usuario
    
    try {
        if (name.length>0) await User.updateOne({_id:id},{name:name})
        
        if (email.length>0) await User.updateOne({_id:id},{email:email})
        if (lastName.length>0) await User.updateOne({_id:id},{lastName:lastName})
        if (user.length>0) await User.updateOne({_id:id},{user:user})
        if (password.length>0) await User.updateOne({_id:id},{password:password})
        if (image.length>0) await User.updateOne({_id:id},{image:image})
       return await User.findById(id)
    } catch (error) {
        console.log(error)
        throw error
    }
}

module.exports=uptadeUser