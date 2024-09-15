// How to create an object
const person = {
    name: 'Kamal',
    age: 30,
    friends: ['Shola', 'Ade', 'Ibrahmin'],
    greeting:function() {
        alert('Hello World')
    }
};
document.getElementById("Superdamidev").innerHTML = person.name + " " + person.friends;
//console.log(person);

//How to add a property to an obj 
const Damiobj = {
    name: 'Kamal',
    age: '30',
    friends: ['Shola', 'Ade', 'Ibrahim'],
    }
    Damiobj.isAdmin = 'true';
    document.getElementById("Superdamidev").innerHTML = Damiobj.name + " " + Damiobj.isAdmin + " ";

    // add another property to new obj
    const myobj = {
        name: 'Damilola',
        age: 30,
        haircolor: 'Black',
    }
    myobj.gender = 'Male';
    myobj.haircolor = 'Black';
    myobj.age = 30;
    document.getElementById("Superdamidev").innerHTML = myobj.name + " "  + myobj.gender + " " + myobj.haircolor + " " + myobj.age + " ";

    //Method on javascript obj
    //method are action that perform on an object
    // A method is a function definition stored as a property value.

        // i can only access one method at a time
    const myobj02 = {
        firstName: 'Olawepo', 
        lastName: 'Damilola',
        age:  30,
        haircolor: 'Black',
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
        
    }
    document.getElementById("Superdamidev").innerHTML = myobj02.fullName();
    //the code above access the fullName of an obj

    // Adding a method to an object
    const myobj04 = {
        firstName: 'Olawepo',
        lastName: 'Damilola',
        age: 30, 
    }
    myobj04.name = function() {
        return (this.firstName + " " + this.lastName). toUpperCase();
    };
    document.getElementById("Superdamidev").innerHTML = " my skill is Tech " + myobj04.name();
