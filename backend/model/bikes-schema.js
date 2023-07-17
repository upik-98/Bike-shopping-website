var mongoose = require("mongoose");

const bikeSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, "name is must to enter"],
        trim: true,
        maxlength: [20, "name can't be more than 40 characters"],
        minlength: [4, "name can't be less than 4 characters"]
    },
    price: {
        type: String,
        required: [true, "price is must field"]
    },
    description: {
        type: String,
        trim: true
    },
    imageUrl: {
        type: String,
    },
    averageRating: {
        type: Number
    }
});


const cartSchema = mongoose.Schema({
    productId: { type: Object }
})

module.exports = { bikeSchema: mongoose.model("bikeSchema", bikeSchema), cartSchema: mongoose.model("cartSchema", cartSchema) };

new bikeSchema({ prod })



