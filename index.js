import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import paymentRoutes from "./routes/payment.js";
import subscriptionRoutes from "./routes/subscription.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8081;

app.use(express.json());
app.use(cors());

app.use('/payments', paymentRoutes); 
app.use('/subscriptions', subscriptionRoutes); 

// app.listen(
//     PORT,
//     () => console.log(`API live on http://localhost:${PORT}`)
// );

app.get('/', (req, res) => res.send('Pasarela de pagos homepage'));

mongoose.set("strictQuery", false);
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        app.listen(PORT, () => console.log(`API live on http://localhost:${PORT}`));
        console.log('Connected to Mongo')})
    .catch((error) => console.error(error));
