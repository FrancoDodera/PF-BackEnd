const User = require('../../models/Users');


const GetUsers=async()=>{
    try {
        const users=await User.find({});
        return users
    } catch (error) {
        console.log(error)
        throw error
    }
   
   
      

}

module.exports=GetUsers