const User = require('../../models/Users')

const addNewUser =(req,res) =>{
    
    const {email,name,lastName,dni,user,password}=req.body

        if (!email)  res.status(400).send(`enter a email`)
        if (!name)  res.status(400).send(`enter a name`)
        if (!lastName)  res.status(400).send(`enter a lastName`)
        
        if (!user)  res.status(400).send(`enter a user`)
        if (!password)  res.status(400).send(`enter a password`)
        

    try {
       
    const newUser = new User({
        email:email,
        name:name,
        lastName:lastName,
        dni:dni,
        user:user,
        password:password,

    })
    console.log(newUser)
    newUser.save()
    return res.status(200).send('the user logged in successfully')
    } catch (error) {
        console.log(error)
        return res.status(400).send('the user is not logged in')
    }
    

}

module.exports= addNewUser