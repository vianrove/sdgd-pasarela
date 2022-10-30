import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import paymentRoutes from "./routes/payment.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8081;

app.use(express.json());
app.use('/payments', paymentRoutes); 

app.listen(
    PORT,
    () => console.log(`API live on http://localhost:${PORT}`)
);

app.get('/', (req, res) => res.send('Pasarela de pagos homepage'));

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to Mongo'))
    .catch((error) => console.error(error));
