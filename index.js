/*const person = {
fullname: "Olawepo sheriff",
age: 20,
haircolor: "black",
 };
document.getElementById("Superdamidev").innerHTML = 
person.name + ", " + 
person.age + ", " + 
person.haircolor */

//Acessing object properties

/*const person = {
    firstName: "Olawepo",
    lastName: "Damilola",     
    haircolor : "Black",
};

let x = "firstName";
let y = "haircolor";
document.getElementById("Superdamidev").innerHTML = person[x] + " is " + person[y] + " ";

/* const Damiobj = {
    firstName: "Olawepo",
    lastName: "Damilola",
    age: 20,
};

let k = "lastName";
let l = "age";
document.getElementById("Superdamidev").innerHTML = Damiobj[k] + " is " + Damiobj[l] + " years old.";*/

//Adding of a new propewrty to an obj
const Dami = {
    firstName: "Olawepo",
    lastName: "Damilola",
    age: 20,
};
Dami.lastName = "Damilola";
Dami.gender = " Male";
Dami.age = 30,
document.getElementById("Superdamidev").innerHTML = Dami.firstName + "  " + Dami.lastName + " is a " + Dami.gender + " " + Dami.age + " ";

/*const Damiobj1 = {
    firstName: "Olawepo",
    lastName:  "Damilola",
    age:      20,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
document.getElementById("Superdamidev").innerHTML = Damiobj1.fullName();*/