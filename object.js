var fred={
    //key-value pair
    name: "fred",
    email:"fred@gmail.com",
    phone:"+65 9777 7777",
    age:50,
    hello: function(){
        //console.log('hello my name is', this.name);
        console.log(`hello my name is ${this.name}. I am ${this.age} years old.` );
    },
        //write a function called todayIsMyBirthday() which will increase the age by +1
    todayIsMyBirthday: function(){
        this.age++;
    },
    
};
console.log(fred);
console.log(fred.name);
console["log"]('>>>>>',fred["name"]);
console.log('hello=', fred.name);
fred.hello();
fred.name="FRED FLINGSTONE";
fred.hello();
fred.todayIsMyBirthday();
fred.hello();
