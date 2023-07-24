const {postPreference,finish} = require('../../controllers/mercadopago/mercadopagoController')

const postPreferenceHandler = async (req, res) => {
    
    const preference = await postPreference(req,res)
    return preference
}
const finishHandler = async (req, res) => {
    try {
        const {id_user}=req.params;
        const response=await finish(id_user)
        if(response){
            return res.status(200).send('finish')
        }else{
            return res.status(200).send('error')
        }
        
    } catch (error) {
        return res.send(error)
    }
    
}

module.exports = {
    postPreferenceHandler,
    finishHandler
}