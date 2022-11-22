const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

//get all comments
router.get('/', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            include: [User],
        });
        const comment = commentData.map((comment) => comment.get({ plain: true }));

        res.render('single-post', {comment, logged_in: res.session.logged_in});
    } catch (err) {
        res.status(500).json(err);
    }
});

//create a comment
router.post('/', withAuth, async (req, res) => {
        const description = req.body;
    try {
        const newComment = await Comment.create({
            ...description,
            user_id: req.session.user_id,
        });
        res.json(newComment);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
