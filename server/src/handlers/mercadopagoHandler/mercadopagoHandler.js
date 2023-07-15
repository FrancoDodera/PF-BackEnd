const {postPreference} = require('../../controllers/mercadopago/mercadopagoController')

const postPreferenceHandler = async (req, res) => {
    
    const preference = await postPreference(req,res)
    return preference
}

module.exports = {
    postPreferenceHandler,

}