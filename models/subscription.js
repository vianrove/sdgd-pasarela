import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SubscriptionSchema = Schema ({
    _id: String,
    subStatus: Boolean,
});

export default mongoose.model('Subscription', SubscriptionSchema);
