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

/*myArray.forEach(function(item, index){
    console.log(`index: ${index}, value: ${item}`);
});*/
//myArray.forEach((item, index) => console.log(`index: ${index}, value: ${item}`));
myArray.forEach(item=> console.log(`value: ${item}`));


// for...of

//for...in