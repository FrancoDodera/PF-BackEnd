const User = require('../models/Users')

const addNewUser =(req,res) =>{
    console.log(req.body)
    const {name,lastName,dni,user,password}=req.body

    
        if (!name)  res.status(400).send(`enter a name`)
        if (!lastName)  res.status(400).send(`enter a lastName`)
        if (!dni)  res.status(400).send(`enter a dni`)
        if (!user)  res.status(400).send(`enter a user`)
        if (!password)  res.status(400).send(`enter a password`)
        

    try {
       
    const newUser = new User({
        name:name,
        lastName:lastName,
        dni:dni,
        user:user,
        password:password,

    })
    newUser.save()
    return res.status(200).send('the user logged in successfully')
    } catch (error) {
        console.log(error)
        return res.status(400).send('the user is not logged in')
    }
    

}

module.exports= addNewUser