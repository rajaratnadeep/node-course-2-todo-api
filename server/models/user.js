var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

module.exports = {User};

// var user = new User({
//     email: 'raja@example.com'
// });

// user.save().then((doc) => {
//     console.log('User saved', doc);
// }, (e) => {
//     console.log('error', e);
// })