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

    //delete many
    // db.collection('Todos').deleteMany({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // });

    //delete one
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    //findone and delete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({name: 'Raja'});
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5c42b1b1159a0549a0fe0b7c")
    }).then((results)=>{
        console.log(JSON.stringify(results,undefined,2));
    });

    // client.close();
}); //link and callback fxn
