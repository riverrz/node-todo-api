const {MongoClient} = require("mongodb");


MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err) {
        return console.log("Unable to connect MongoDB server");
    }
    console.log("Connected to MOngoDB server");

    // deleteMany

    // db.collection("Todos").deleteMany({complete: false}).then((result)=> {
    //     console.log(result);
    // });

    // deleteOne
    
    // db.collection("Todos").deleteOne({ text: "Something else to do"}).then((result)=> {
    //     console.log(result);
    // });

    //findOneAndDelete

    db.collection("Todos").findOneAndDelete({completed: false}).then((deletedTodo)=> {
        console.log("You deleted the following Todo: ");
        console.log(JSON.stringify(deletedTodo.value,undefined,2));
    }, (err)=> {
        console.log("Couldn't find the todo");
    })
    //   db.close();
});