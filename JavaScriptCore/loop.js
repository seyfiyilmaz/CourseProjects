const myArray = ["a", "b", "c"];

//for
/*
for(let i=0; i<myArray.length; i++){
    //if(i === 1) break;
    if(i === 1) continue;
    console.log(`index: ${i}, value: ${myArray[i]}`);
}
*/
//while
/*let i = 0;
while(i<myArray.length){
    //console.log(i);
    //if(i === 1) break;
    if(i === 1) {i++; continue;}
    console.log(`index: ${i}, value: ${myArray[i]}`);
    i++;
}*/

//do... while
/*let i = 0;
do{
    console.log(`index: ${i}, value: ${myArray[i]}`);
    i++;
}
//while(i<myArray.length)
while(i<0)
*/

//foreach ---ES5 ile geldi---
/*
myArray.forEach(function(item, index){
    // if(i === 1) break; //Bu kod hata verir forEach içinde break kullanılmaz.
    console.log(`index: ${index}, value: ${item}`);
});
//myArray.forEach((item, index) => console.log(`index: ${index}, value: ${item}`));
//myArray.forEach(item=> console.log(`value: ${item}`));
*/

// for...of  --ES6 ile geldi
/*for (let elem of myArray) {
    console.log(`value: , ${elem}`);
}*/

/*for(const elem  of myArray) {
    console.log(`value: , ${elem}`);
}*/

/*for(const [index, elem]  of myArray.entries()) {
    // if(index === 1) break;
    **if(index === 1) continue;
    console.log(`index: ${index}, value: , ${elem}`);
}*/

//for...in
/*const myObject = {
    "a": 1,
    "b": 2,
    "c": 3
};

for(let property in myObject){
    console.log(`property: ${property}, value: , ${myObject[property]}`);
}*/

const num = 100000000;
const arr = new Array(num);

console.time("for");
for (let i = 0; i < num; i++) {}
console.timeEnd("for");

console.time("while");
let i = 0;
while (i < 0) {
  i++;
}
console.timeEnd("while");

console.time("forEach");
arr.forEach((elem) => "");
console.timeEnd("forEach");

console.time("for...of");
for (const elem of arr) {
}
console.timeEnd("for...of");

/*for 1.000.000 iteration
    for: 2.587ms
    while: 0.004ms
    forEach: 2.889ms
    for...of: 19.112ms
*/

/*for 10.000.000 iteration
    for: 7.108ms
    while: 0.004ms
    forEach: 29.336ms
    for...of: 157.366ms
*/

/*for 100.000.000 iteration
    for: 52.429ms
    while: 0.006ms
    forEach: 2.453s
    for...of: 2.676s
*/

var day;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    break;
}
console.log("Today is ", day);
