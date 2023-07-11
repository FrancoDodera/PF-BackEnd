const Payment = require("../../models/PaymentModel")


//GET PAGOS POR ID USUARIO
const getPaymentById = async (id) => {
    const payment = await Payment.findById(id);
    if (payment) {
        return payment;
    } else {
        return "ID of the payment does not exist"
    }
}


//GET TODOS LOS PAGOS
const getPayments = async () => {
    const payments = await Payment.find();
    return payments;
}

//DELETE PAGOS
const deletePayment = async (id) => {
    let deleted = await Payment.deleteOne({ _id: id });
    if (deleted) {
        return "Payment deleted successfully"
    } else {
        return "Error deleting payment"
    }
}

//POST PAGOS
const createPayment = async (data) => {
    try {
        const { id_payment, date, amount, status } = data;
        if (!id_payment || !date || !amount || !status) {
            throw new Error("Missing required fields");
        }
        const newPayment = await Payment.create({
            id_payment: id_payment,
            date: date,
            amount: amount,
            status: status,
        });
        console.log("Payment created successfully", newPayment);
        return newPayment;
    } catch (error) {
        console.error("Error creating payment");
        throw error;
    }
}

module.exports = {
    getPaymentById,
    getPayments,
    deletePayment,
    createPayment,
}