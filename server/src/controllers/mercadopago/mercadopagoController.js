const mercadopago = require("mercadopago");
const { postSale } = require("../sale/saleController");
const { postSaleDetail } = require("../ventaDetail/ventadetailController");
const Sale=require('../../models/SaleModel')
const Detail= require('../../models/VentaDetailModel')


mercadopago.configure({
  access_token:
    "TEST-1648499011591010-071214-40d04786ef56144a348d375da06778d5-1421384797",
});

const postPreference = async (req, res) => {
  let articuls = [];
  let {sale} = req.body;
  let {detailSale} = req.body;

  detailSale.map((car) => {
    let obj = {
      title: car.name,
      unit_price: Number(car.price),
      quantity: Number(car.amount),
    };
    articuls.push(obj);
  });

  try {
    const saleExist=await Sale.find({id_user:sale.id_user,description:'in cart'});
        if(saleExist.length == 0){
            const newSale=await postSale(sale.id_user,sale.description,sale.date,sale.total)
            if(detailSale.length > 0 ){
                await Promise.all(
                    detailSale.map(async(detail)=>{
                        await postSaleDetail(newSale._id,detail.id,detail.amount,detail.totalPrice)
                    })
                )
            }
        }else{
                const newSale = await Sale.findByIdAndUpdate(
                    saleExist[0]._id,
                    {
                      date: sale.date,
                      total: sale.total
                    },
                    { new: true } // Esto asegura que devuelve el documento actualizado, en lugar del documento anterior a la actualización
                  );
                  
                await Detail.deleteMany({id_venta:newSale._id})
                if(detailSale.length > 0){
                    await Promise.all(
                        detailSale.map(async(detail)=>{
                            await postSaleDetail(newSale._id,detail.id,detail.amount,detail.totalPrice)
                        })
                    )
                }
        }

    const preference = {
      items: articuls,
      back_urls: {
        success: "https://pfcargo.netlify.app/success",
        failure: "https://pfcargo.netlify.app/failure",
        pending: "https://pfcargo.netlify.app/pending",
      },
      auto_return: "approved",
    };

    mercadopago.preferences
      .create(preference)
      .then(function (response) {
        res.json({
          response: response,
          id: response.body.id,
          preference: preference.items,
        });
      })
      .catch(function (error) {
        res.send(error);
      });
  } catch (error) {
    res.send(error);
  }
};

const finish=async(id_user)=>{
  try {
    const response=await Sale.updateOne({id_user:id_user,description:'in cart'},{description:'finished'})
    if(response.modifiedCount>0){
      return true
    }else{
      return false
    }
    
  } catch (error) {
    return false
  }
  
}
module.exports = {
  postPreference,
  finish
};
