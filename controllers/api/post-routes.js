const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    const description = req.body;

    try {
        const newPost = await Post.create({
            ...description
        })
    }
})