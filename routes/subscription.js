import express from 'express';
import { 
    createSubscription,
    getSubscriptions,
    getSubscription,
    updateSubscription,
} from '../controllers/subscriptions.js'

const router = express.Router();

router.post('/', createSubscription);

router.get('/', getSubscriptions);

router.get('/:id', getSubscription);

router.put('/:id', updateSubscription);

export default router;