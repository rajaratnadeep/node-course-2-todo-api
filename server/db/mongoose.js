var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://rajam:bangalore123@ds111065.mlab.com:11065/raja01', {useNewUrlParser: true} );//|| 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
