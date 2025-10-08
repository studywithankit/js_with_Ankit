// singleton
//object.create (singleton type of object)
// objects literals

const mySym = Symbol("key1")



const JsUser = {
    name: "Ankit",
    "full name": "Ankit Kumar",
    age: 18,
    [mySym]: "mykey1",
    location: "Hazaribag",
    email: "ankitgrd121@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym])

JsUser.email = "ankitgrd4741@gmail.com"
console.log(JsUser.email);

//Object.freeze(JsUser)
JsUser.email = "ankitgrd123434@gmail.com"
console.log(JsUser.email);

JsUser.greeting = function(){
    console.log("Hello Js User"); 
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





