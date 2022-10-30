import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SubSchema = Schema({    
    ISBN: String,
    Title: String,
    Category: String,
    Amount: String,
    UnitPrice: Number    
}, { _id: false });   

const PaymentSchema = Schema ({
    client: {
        id: String,
        shipping: {
            state: String,
            city: String,
            street: String,
            address: String
        },
        paymentInfo: {
            cardName: String,
            cardNumber: String,
            expDate: String,
            securityCode: String
        }
    },
    transactionDate: String,
    items: [SubSchema],
    totalPrice: Number
});

export default mongoose.model('Payment', PaymentSchema);
