function addPerson(){
    var personname = document.getElementById("nameField");
     //localStorage['pname'] = pname.value;
     console.log('local' + localStorage.getItem('personname'));
    //console.log("add a person: " + pname.value);
     viewController.addPerson(personname.value);
}
