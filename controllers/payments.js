import PaymentSchema from '../models/payment.js';

export const getPayments = (req, res) => {
    PaymentSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
};

export const getPayment = (req, res) => {
    const { id } = req.params;
    PaymentSchema
        .findOne({_id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
};

export const makePayment = (req, res) => {
    const payment = PaymentSchema(req.body)

    payment
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
};