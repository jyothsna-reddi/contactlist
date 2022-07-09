const exp = require("constants");
const express = require("express");
const port = 8000;
const path = require("path");
const app = express();

//view engine ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
//middleware to parse form data
app.use(express.urlencoded());
app.use(express.static('assets'));

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
  return res.render("index", {   
         title: "Contact List" ,
         contact_list : contact_list,
    });
});
app.post("/create-contact",function(req,res){
    console.log(req.body);
    contact_list.push(req.body);
    return res.redirect('back');
})
app.get('/delete-contact/:phone',function(req,res){
    let phone = req.params.phone;
    let contactIndex=contact_list.findIndex(contact => contact.phone == phone);
    console.log(contactIndex);
    
    if(contactIndex != -1){
        contact_list.splice(contactIndex,1);
    }
        return res.redirect('/');
})

app.listen(port, function (err) {
  if (err) {
    console.log("Error in connecting to server", err);
  }
  console.log("successfully connected to serverr");
});
