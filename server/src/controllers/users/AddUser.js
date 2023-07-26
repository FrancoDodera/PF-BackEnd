const User = require('../../models/UserModel')

const addNewUser =async (req,res) =>{
    try {
    const {email,name,lastName,dni,user,password,type,image}=req.body
    
        const equalUser = await User.findOne({user:user})
        const equalEmail = await User.findOne({email:email})
        if(equalUser) {
            return res.send('User already exists')
        }else if(equalEmail){
            return res.send('There is already a user with this email')
        }else{
            if (!email)  return res.status(400).send(`enter a email`)
            if (!name)  return res.status(400).send(`enter a name`)
            if (!lastName) return res.status(400).send(`enter a lastName`)
            if (!user) return res.status(400).send(`enter a user`)
            if (!password) return res.status(400).send(`enter a password`)
            if (!type) return res.status(400).send(`enter a type`)
            const newUser = new User({
                email:email,
                name:name,
                lastName:lastName,
                dni:dni,
                user:user,
                password:password,
                type:type,
                image:image,
                tokenAuth:null
            })
            await newUser.save()
            return res.status(200).send({acces:true,data:newUser})
        }
    } catch (error) {
        return res.status(400).send('the user is not logged in')
    }
}

module.exports= addNewUser