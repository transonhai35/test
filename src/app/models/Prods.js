const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;


const Prods = new Schema(
    {
        name: { type: String },
        description: { type: String },
        price: { type: String },
        // slug: { type: String, slug: 'name', unique: true },
        author: { type: String },
        image: { type: String },
        phone: { type: String},
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Prods', Prods);
