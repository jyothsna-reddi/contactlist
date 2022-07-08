const express = require("express");
const port = 8000;
const path = require("path");
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
var contact_list = [
    {
        name:"Divya Reddy",
        phone:"9912070239",
    },
    {
        name:"Divya Reddy",
        phone:"9912070239",
    },
    {
        name:"Divya Reddy",
        phone:"9912070239",
    },
];

app.get("/", function (req, res) {
    console.log(__dirname);
  return res.render("index", { 
    
         title: "Contact List" ,
         contact_list : contact_list,
    });
});
app.post("/create-contact",function(req,res){
    return res.redirect('back');
})

app.listen(port, function (err) {
  if (err) {
    console.log("Error in connecting to server", err);
  }
  console.log("successfully connected to serverr");
});
