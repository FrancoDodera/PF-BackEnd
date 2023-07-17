const mercadopago = require("mercadopago");
const { postSale } = require("../sale/saleController");
const { postSaleDetail } = require("../ventaDetail/ventadetailController");


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
    const status=true;
    console.log(detailSale)
    const saleCreated = await postSale(
            sale.id_user,
            sale.description,
            sale.date,
            sale.total,
            status
    );
    detailSale.map(async (car) => {
      await postSaleDetail({
        id_venta: saleCreated._id,
        id_car: car.id,
        amount: car.amount,
        subtotal: car.price * car.amount,
      });
    });

    const preference = {
      items: articuls,
      back_urls: {
        success: "http://localhost:5173/success",
        failure: "http://localhost:5173/failure",
        pending: "http://localhost:5173/pending",
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

module.exports = {
  postPreference,
};
