const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [User],
        });
        const post = postData.map((post) => post.get({ plain: true }));
       
        res.render('user-posts', {
            ...post,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/post/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findOne({
            where: {id: req.params.id},
            include: [User, 
            { 
                model: Comment,
                include: [ User ],
            },
        ],
});

if (postData) {
    const post = postData.get({ plain: true });

    res.render('single-post', {
        ...post,
        logged_in: true
    });
    } else {
        res.status(404).end();
    }
} catch (err) {
    es.status(500).json(err)
}
});

//redirect to where?
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('');
        return;
    } 
    res.render('signup')
});

module.exports = router;

