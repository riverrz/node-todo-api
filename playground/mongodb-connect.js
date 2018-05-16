const {MongoClient, ObjectID} = require("mongodb");

var obj = new ObjectID();
console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db)=> {
    if(err) {
       return console.log("Unable to connect to the MongoDB server");
    }

    console.log("Connected to MongoDB server");
    // db.collection('Todos').insertOne({
    //     text: "Again and again something else to do",
    //     complete: false
    // },(err,result)=> {
    //     if(err) {
    //         return console.log("Unable to insert in Todos collection")
    //     }
    //     console.log("Successfully inserted");
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // })

    // db.collection('Users').insertOne({
    //     name: "Shivam",
    //     age: 21,
    //     location: "H-block"
    // },(err,result)=> {
    //     if(err) {
    //         return console.log("Unable to insert to Users collection");
    //     }
    //     console.log("Successfully inserted into Users collection");
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // })
    db.close();
});