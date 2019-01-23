var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://rajamahapatra01@gmail.com:bangalore123@ds111065.mlab.com:11065/raja01');//|| 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
