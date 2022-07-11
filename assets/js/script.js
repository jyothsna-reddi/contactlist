
var rowconatiner = document.querySelectorAll(".row-container");

console.log("loaded");
console.log(rowconatiner);
for(let i=0;i<rowconatiner.length;i++){
    
    rowconatiner[i].addEventListener("click",function(event){
        
        var Atag = (event.target);
        if(Atag.textContent == "Edit")
        {
            console.log(rowconatiner[i].children[1]);
            var edit =rowconatiner[i].children[3].firstElementChild;
            console.log(edit.innerHTML);
            // var names = document.getElementById(rowconatiner[i].children[1]);
            // var phone = document.getElementById(rowconatiner[i].children[2]);
            // console.log(names);
            var names=rowconatiner[i].children[1];
            var phone = rowconatiner[i].children[2];
            console.log("a");
            event.preventDefault();
            const namespan = names.firstElementChild;
            const nameinput = document.createElement('input');
            nameinput.type = "text";
            nameinput.id ="name";
            nameinput.value = namespan.textContent;
            names.insertBefore(nameinput,namespan);
            names.removeChild(namespan);
            
            const phonespan = phone.firstElementChild;
            const inputs = document.createElement('input');
            inputs.type = "text";
            input.id ="phone";
            inputs.value = spans.textContent;
            phone.insertBefore(inputs,spans);
            phone.removeChild(spans);
            edit.textContent = "Save";
            Atag.style.backgroundColor= "green";
        }
        else if(Atag.textContent == "Save"){

        }
    })
}

// <!-- href="/edit-contact/<%= i._id %>" -->