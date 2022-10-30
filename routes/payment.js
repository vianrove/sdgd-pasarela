import express from 'express';
import { 
    makePayment,
    getPayments,
    getPayment
} from '../controllers/payments.js'

const router = express.Router();

router.get('/', getPayments);

router.post('/', makePayment);

router.get('/:id', getPayment);

export default router;