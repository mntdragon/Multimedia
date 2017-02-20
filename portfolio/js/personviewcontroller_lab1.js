
var viewController = new ViewController(); //Khoi tao va dat ten cho ViewController

function ViewController()
{
  this.PersonModel = new PersonModel();

  this.addPerson = function(name)
  {
    var newPerson = new Persons(name);

    this.PersonModel.addPerson(newPerson);

    var list = document.getElementById("p_list");
    list.innerHTML = "";
    for(var i = 0; i < this.PersonModel.getPersons().length; i++){
        list.innerHTML += "<p>" + this.PersonModel.getPersons()[i].pname + "</p>";
    }
      console.log(this.PersonModel.getPersons());
  }
}