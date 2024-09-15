 // Constructor is a special method for defining the 
// properties nd method of an object

// Create a Constructor we give it a function obj nd passes through parameter
// nd give it some argument.

function phone(make, model, year, color) {
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
}

phone.prototype.brand = "Samsung";
const phone1 = new phone("Samsung", "SM-m356b", 2024, "black");
document.getElementById("Superdamidev").innerHTML = "This phone Brand is " + phone1.brand + " ";
console.log(phone1.make);
console.log(phone1.model);
console.log(phone1.year);
console.log(phone1.color);

phone.prototype.brand = "iphpne";
//document.getElementById("Superdamidev").innerHTML = "This phone Brand is " + phone2.brand + " ";
const phone2 = new phone("iphone", "A2633", 2021, "red");  
console.log(phone2.make);
console.log(phone2.model);
console.log(phone2.year);
console.log(phone2.color);

phone.prototype.brand = "infinix";
//document.getElementById("Superdamidev").innerHTML = "This phone Brand is " + phone3.brand + " ";
const phone3 = new phone("infinix", "X6852", 2024, "blue");
console.log(phone3.make);
console.log(phone3.model);
console.log(phone3.year);
console.log(phone3.color);