const {postPreference} = require('../../controllers/mercadopago/mercadopagoController')

const postPreferenceHandler = async (req, res) => {
    const {description, price, quantity} = req.body
    const preference = await postPreference(description, price, quantity, res)
    return preference
}

module.exports = {
    postPreferenceHandler,

}