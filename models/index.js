const Comment = require('./Comment');
const User = require('./User');
const Post = require('./Post');

//Double check the foreign keys
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'post_id'
});

User.hasMany(Post, {

})

Post.hasMany(Comment, {

})