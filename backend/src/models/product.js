const mongoose = require('mongoose');

const { Schema } = mongoose;

const Product = new Schema({
                id: String,
                image: {
                    id: Number,
                    url: String
                },
                liked: Boolean,
                likedCount: Number,
                mobileUrl: String,
                price: Number,
                shopId: String,
                shopName: String,
                title: String,
                url: String
});

module.exports = mongoose.model('Product', Product);