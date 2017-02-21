var viewController = new ViewController(); //Khoi tao va dat ten cho ViewController

function ViewController()
{
  this.PersonModel = new PersonModel();

  this.addPerson = function(name)
  {
    var newPerson = new Persons(name);

    this.PersonModel.addPerson(newPerson);
    console.log('get' + localStorage.getItem('pname'));
    var i = ' ';
    var list = document.getElementById("p_list");
   if(typeof(Storage) !== "undefined") {
        if (localStorage.pname) {
            localStorage.pname = localStorage.pname + i + name;
	 list.innerHTML = localStorage.pname;
    }
   }
      //console.log(this.PersonModel.getPersons());
  }
}