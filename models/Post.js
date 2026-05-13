const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: String,
    mediaUrl: String, // ছবি বা ভিডিওর লিঙ্ক
    likes: { type: [String], default: [] },
    comments: [{
        userId: String,
        username: String,
        text: String,
        createdAt: { type: Date, default: new Date() }
    }],
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);
