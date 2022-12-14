const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');

//create post
router.post('/', withAuth, async (req, res) => {
    const body = req.body;

    try {
        const newPost = await Post.create({
            ...body,
            user_id: req.session.user_id
        });
        res.json(newPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

//update 
router.put('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (postData) {
            res.status(404).json({ message: 'No post found with that id'});
            return;
        }
        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//delete
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (postData) {
            res.status(404).json({ message: 'No post found with that id'});
            return;
        }
        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
