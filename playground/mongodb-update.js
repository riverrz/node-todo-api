const { MongoClient, ObjectID } = require("mongodb");


MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err) {
        return console.log("Unable to connect MongoDB server");
    }
    console.log("Connected to MOngoDB server");

    // db.collection("Todos").findOneAndUpdate({
    //     _id: new ObjectID("5afc19e614cd4ee0f132714f")
    // },{
    //     $set: {
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result)=> {
    //     console.log(result);
    // });

    db.collection("Users").findOneAndUpdate({
        name: "Andrew"
    }, {
        $set: {
            name: "Sari",
            location: "Bali",
            age: 26
        }
    }, {
        returnOriginal: false
    }).then((result)=> {
        console.log(result);
    });
    //   db.close();
});