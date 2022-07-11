const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/contact_list");

const db=mongoose.connection;

db.on("error",console.error.bind(console,"Cannot connect"));

db.once("open",function(err){
    if(err){
        console.log("cannot connect to db");
        return;
    }
    console.log("connected to db");
})
module.exports=db;
// // //require the library
// const mongoose = require('mongoose');

// //connect to the database
// mongoose.connect('mongodb://0.0.0.0:27017/contact_list_db');

// //acquire the connection(to check if it's successful)
// const db = mongoose.connection;

// //error
// db.on('error', function(err) { console.log("error"); });

// //up and running then print the message
// db.once('open', function() {
  
//     console.log("Successfully connected to the database");

// });
// module.exports=db;