// alert("HEllo");
// alert(2+5);
// alert(true);

console.log(typeof(24));
console.log(typeof("Hello"));
console.log(typeof(`Name`));
console.log(typeof('world'));
console.log(typeof(true));
console.log(typeof(null));
console.log(typeof(undefined));

// prompt("What is your name?");

var myName="Arjay";
myName="Buen";//new name assigned
console.log(myName)
// alert(myName);
// var yourName=prompt("What is your name?");
// console.log(yourName+" "+myName);
// console.log(`${yourName} ${myName}`);
// console.log('${yourName} ${myName}');

//Variable exercise
var a="3";
var b="8";

var c=a;
a=b;
b=c;

console.log("a is "+ a);
console.log("b is "+ b);

var message ="Hello";
var name="Arjay";

// alert(message+" "+name);
console.log(name.length);

// var tweetLenght=140;
// var tweetMsg=prompt("Write your tweet...");
// characterLeft=tweetLenght-tweetMsg.length;
// console.log("You have written "+tweetMsg.length+" characters, you have "+characterLeft+" characters left.");

console.log(name.slice(2,5));//first parameter where to start to include, second parameter number of position to end

// var msg=prompt("Write your tweet....");
// alert(msg.slice(0,140));

console.log(name.toUpperCase());
console.log(name.toLowerCase());

// var firstName=prompt("What is your first name?");
// var upper=firstName.slice(0,1).toUpperCase();
// var lower=firstName.slice(1,firstName.length).toLowerCase();
// alert("Hello, " +upper+lower);

// var dogAge=prompt("What is your dog age?");
// var humanAge=((dogAge-2)*4)+21;
// alert("Your dog is "+humanAge+" years old in human years.");


function getMilk(money){
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    var numberOfBottles=Math.floor(money/1.5);

    console.log("The milk you can buy with your $"+money+" money, are "+numberOfBottles+" bottle of milks");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");    
}

getMilk(5);

