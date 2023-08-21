//modles/post.js

import mongoose, { Schema, models, model } from 'mongoose';

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    fileName: {
        type: String,
    },
    alt: {
        type: String,
    },
    slug: {
        type: String,
    },
    category: {
        type: String,
    },
}, 
    { timestamps: true }
);

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

export default Post;