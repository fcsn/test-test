const mongoose = require('mongoose');

const { Schema } = mongoose;

const Ranking = new Schema({
                description: String,
                id: String,
                image: {
                    id: Number,
                    url: String
                },
                liked: Boolean,
                name: String,
                SecondName: String,
                url: String,
});

module.exports = mongoose.model('Ranking', Ranking);