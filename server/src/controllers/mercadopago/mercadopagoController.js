const mercadopago = require("mercadopago");

mercadopago.configure({
    access_token: "TEST-1648499011591010-071214-40d04786ef56144a348d375da06778d5-1421384797",
});

const postPreference = async (req,res) => {
    let articuls=[]
    req.body.map((car)=> {
       let obj= {
            title:car.name,
            unit_price:Number(car.price),
            quantity:Number(car.amount)
        }
        articuls.push(obj)
    })
    
    const preference = {
        items: articuls,
        back_urls: {
            success: "http://localhost:5173",
            failure: "http://localhost:5173",
            pending: "",
        },
            auto_return: "approved",
    };
        mercadopago.preferences
            .create(preference)
            .then(function (response) {
                res.json({
                    response: response,
                    id: response.body.id,
                    preference: preference.items
                });
            })
            .catch(function (error) {
                console.log(error);
                res.send(error)
            });
}


module.exports = {
    postPreference,

}
