const User = require('../../models/UserModel')

const addNewUser =async (req,res) =>{
    const {email,name,lastName,dni,user,password}=req.body
    
    const equalUser = await User.findOne({user:user})

        if(equalUser) {
            if (equalUser.status===false) return res.status(200).send('inactive user')
            if(equalUser.password==password) return res.status(202).send({acces:true})
            else{
                return res.send('User found but wrong password')
            }
        }
        if (!email)  return res.status(400).send(`enter a email`)
        if (!name)  return res.status(400).send(`enter a name`)
        if (!lastName) return res.status(400).send(`enter a lastName`)
        if (!user) return res.status(400).send(`enter a user`)
        if (!password) return res.status(400).send(`enter a password`)
        

    try {
        const newUser = new User({
            email:email,
            name:name,
            lastName:lastName,
            dni:dni,
            user:user,
            password:password,

        })
       
        await newUser.save()
        return res.status(200).send({acces:true})
    } catch (error) {
        console.log(error)
        return res.status(400).send('the user is not logged in')
    }
}

module.exports= addNewUser