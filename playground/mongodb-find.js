const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect MongoDB server");
  }
//   db.collection("Todos").find({
//       _id: new ObjectID("5afbde5c2206af160f12781b")
//   }).toArray().then((docs)=> {
//     console.log("Todos: ");
//     console.log(JSON.stringify(docs,undefined,2));
//   }, (err)=> {
//       console.log("Unable to fetch the documents", err);
//   })

    // db.collection("Todos").find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log("Unable to fetch the documents", err);
    // })

    db.collection("Users").find().count().then((count)=> {
        console.log(`Total Users: ${count}`);
        db.collection("Users").find({name: "Shivam"}).toArray().then((res)=> {
            console.log("Fetched User with name: \"Shivam\"");
            console.log(JSON.stringify(res,undefined,2));
        }, (err)=> {
            console.log("Couldn't fetch users with given name");
        });
    }, (err)=> {
        console.log("Couldn't fetch the documents");
    })
//   db.close();
});