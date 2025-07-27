const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    comment: { type: String, required: true },
    rate: { type: Number },
    userOrDesigner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'role'
    },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true },
    role: {
        type: String,
       enum: ['user', 'designer']
    }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
