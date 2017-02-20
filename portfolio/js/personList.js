function addPerson(name){
    var name = document.getElementById("nameField");
    console.log("Adding a person: " + name.value);
    
    var list = document.getElementById("p_list");
    list.innerHTML += "<p>" + name.value + "</p>";
}

