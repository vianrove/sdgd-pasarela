import SubscriptionSchema from '../models/subscription.js';

export const getSubscriptions = (req, res) => {
    SubscriptionSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
};

export const getSubscription = (req, res) => {
    const { id } = req.params;
    SubscriptionSchema
        .findOne({_id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
};

export const createSubscription = (req, res) => {
    const subscription = SubscriptionSchema(req.body)

    subscription
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
};

export const updateSubscription = (req, res) => {
    const { id } = req.params;
    const {
        userID,
        subStatus
    } = req.body;
    
    SubscriptionSchema
        .updateOne(
            {userID: id}, 
            { $set: {
                userID,
                subStatus                
            }})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))
};

export const deleteSubscription = (req, res) => {
    const { id } = req.params;

    SubscriptionSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
}