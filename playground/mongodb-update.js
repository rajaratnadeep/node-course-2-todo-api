//const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {
    useNewUrlParser: true
}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('connected to mongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c431040a92393be7eb862fc')
    // },{
    //     $set: {
    //         completed: true
    //     }//this is a mongo db operator
    // },{
    //     returnOriginal: false
    // }).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c4237e1af3b0741ac2df608')
    },{
        $set:{
            name: 'Raja'
        },
        $inc:{
            age: 1
        }
    },{
        returnOriginal: false
    }).then((results)=>{
        console.log(results);
    })

    // client.close();
}); //link and callback fxn
