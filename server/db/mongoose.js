var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp', {
//     useNewUrlParser: true
// }) //'mongodb://rajam:hey123@ds111065.mlab.com:11065/raja01' ||
//     .then(()=> console.log('MongoDb Connected'))
//     .catch(err => console.log(err));
mongoose.connect('mongodb://rajam:hey123@ds111065.mlab.com:11065/raja01', {
    useNewUrlParser: true
    })
    .then(() => console.log('MongoDb Connected'))
    .catch(err => console.log(err));

module.exports = {mongoose};
