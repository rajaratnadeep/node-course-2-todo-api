//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('connected to mongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c4236b056420f180c0fcc70')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch docs', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todoscount: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch docs', err);
    // });

    db.collection('Users').find({name: 'Raja'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined , 2));
    }, (err) => {
        console.log('Unable to fetch docs', err);
    });

    // client.close();
}); //link and callback fxn
