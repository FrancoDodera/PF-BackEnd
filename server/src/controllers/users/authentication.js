const User = require("../../models/UserModel")


const authentication=async (body)=>{
    const {name,lastName,email,user,token,dni,type,image,password}=body
    
    try {
        const userFind=await User.findOne({user:user,tokenAuth:token});
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
    } catch (error) {
        throw error
    }
}

module.exports=authentication