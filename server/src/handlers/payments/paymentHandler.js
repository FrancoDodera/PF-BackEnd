const {
    getPaymentById,
    getPayments,
    deletePayment,
    createPayment,
} = require("../../controllers/payments/PaymentsController");

const createPaymentHandler = async (req, res) => {
    const payload = req.body;
    try {
      console.log(payload)
      res.status(200).send("ok");
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  const getPaymentByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
      let result = await getPaymentById(id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  };
  
  const getPaymentsHandler = async (req, res) => {
    try {
     let result = await getPayments();
     return res.status(200).json(result);
    } catch (error) {
     return res.status(400).json({ error: error.message });
    }
  }
  
  
  const deletePaymentHandler = async (req, res) => {
    const id  = req.params.id;
    console.log('id desde backend', id)
    try {
      let result = await deletePayment(id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  };
  
module.exports = {
    createPaymentHandler,
    getPaymentByIdHandler,
    getPaymentsHandler,
    deletePaymentHandler,
}