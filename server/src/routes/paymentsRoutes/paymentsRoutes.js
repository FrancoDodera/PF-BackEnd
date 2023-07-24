const {
  createPaymentHandler,
  getPaymentByIdHandler,
  getPaymentsHandler,
  deletePaymentHandler,
} = require("../../handlers/payments/paymentHandler");
const {Router} = require('express')

const PaymentsRoutes = Router()


PaymentsRoutes.post('/notification', createPaymentHandler);

PaymentsRoutes.get('/', getPaymentsHandler);
PaymentsRoutes.get('/:id', getPaymentByIdHandler);
PaymentsRoutes.delete('/:id', deletePaymentHandler);


module.exports = PaymentsRoutes;