const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Course = new Schema({

    name: { type: String, require: true },
    level: { type: String, require: true },
    videoId: { type: String, require: true },
    description: { type: String, maxLength: 255 },
    image: { type: String },
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true,
});

mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'.at,
});

module.exports = mongoose.model('Course', Course);