const Comment = require('./Comment');
const User = require('./User');
const Post = require('./Post');

//Double check the foreign keys
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASECADE'
});

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASECADE'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASECADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
foreignKey: 'post_id'
});

module.exports = {
    User,
    Comment,
    Post
};