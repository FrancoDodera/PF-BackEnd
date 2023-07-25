const User = require("../../models/UserModel")


const authentication=async (body)=>{
    const {name,lastName,email,user,token,dni,type,image,password}=body
    
    try {
        const emailFind=await User.findOne({email:email})
        if(emailFind.tokenAuth == null){
            await User.updateOne({_id:emailFind._id},{
                tokenAuth:token
            })
            const user=await User.findById(emailFind._id)
            return {acces:true,data:user}
        }else{
            const userFind=await User.findOne({email:user,tokenAuth:token});
            if(userFind){
                if(userFind.status){
                    return {acces:true,data:userFind}
                }else{
                    return {acces:false,data:userFind}
                }
            }else{
                const newUser = new User({
                    email:email,
                    name:name,
                    lastName:lastName,
                    dni:dni,
                    user:user,
                    password:password,
                    type:type,
                    image:image,
                    tokenAuth:token
                })
                await newUser.save()
                return {acces:true,data:newUser}
            }
        }
        
    } catch (error) {
        throw error
    }
}

module.exports=authentication