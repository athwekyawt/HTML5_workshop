//Declare a variable

var first_name = "fred"; // string
var last_name = "flingstone"; // string
var age = 50; // number
var married = true;


var full_name = first_name + " " + last_name; // string
console.info("Full name:", full_name);

if ("Barney" == name){
    console.log("Hello Barney");
} else if ("Fred" == name) {
    console.log("Hello Fred");
} else {
    console.log("Huh?");
}

//+ - * / % ++ --
age = age + 1;
age = age * 2;
age = age / 3;
console.info("Age:", age);

//not-!, and-&&, or-|| 
console.info("Married:", married);
console.info("Not Married:", !married);

var num = 12;
if (num < 10) {
    console.log("Number",num,"is less than 10");
} else if (num==10) {
    console.log("Number",num,"is equal to 10");
} else {
    console.log("Number",num,"is greater to 10");
}


