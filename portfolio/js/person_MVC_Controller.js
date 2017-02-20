function addPerson(){
    var pname = document.getElementById("nameField");
    console.log("add a person: " + pname.value);
     viewController.addPerson(pname.value);
}
