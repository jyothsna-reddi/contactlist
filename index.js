const exp = require("constants");
const express = require("express");
const port = 8000;
const db=require("./Config/mongoose");
const path = require("path");
const app = express();
const Contact = require("./models/schema");
const { Console } = require("console");
const { compile } = require("ejs");

//view engine ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
//middleware to parse form data
app.use(express.urlencoded());
app.use(express.static('./assets'));

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

    //fetch data from mongodb
    contact_list = Contact.find({},function(err,AllcontactList){
        if(err){
            Console.log("Cannot fetch the data");
            return;
        }
        return res.render("index", {   
            title: "Contact List" ,
            contact_list : AllcontactList,
       });
    })
  
});
app.post("/create-contact",function(req,res){
    // post data to db
    Contact.create ({
        name:req.body.name,
        phone : req.body.phone,
    }) 
    // console.log(req.body);
    // contact_list.push(req.body);
    return res.redirect('back');
})
app.get('/delete-contact/:id',function(req,res){
    let id=req.params.id;
    Contact.findByIdAndDelete(id,function(err){
        if(err){
            console.log("Cannot delete the contact");
            return;
        }
        return res.redirect('/');
    })
    // let phone = req.params.phone;
    // let contactIndex=contact_list.findIndex(contact => contact.phone == phone);
    // console.log(contactIndex);
    
    // if(contactIndex != -1){
    //     contact_list.splice(contactIndex,1);
    // }
    //     return res.redirect('/');
})

// app.push("/edit-contact/:id",function(req,res){


// })

app.listen(port, function (err) {
  if (err) {
    console.log("Error in connecting to server", err);
  }
  console.log("successfully connected to serverr");
});
