const mongoose = require('mongoose');
const storySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    content: String,
})

module.exports = mongoose.model('Story', storySchema);