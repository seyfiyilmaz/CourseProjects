let process_mark = "";
let processresult = 0;

while (true) {
  let a, b = 0;
  a = prompt("Enter the first number for four operations in math.", "0");
  process_mark = prompt("Please, you must select ['+','-','*','/'] for four operations in math. ", "+"); 
  b = prompt("Enter the second number for four operations in math.", "0");
  alert("A value: " + a);
  alert("B value: " + b);
  if(a == "q" || b == "q")
    break;
  else{
    a = parseInt(a);
    b = parseInt(b);
  }

  if(!checknumbers(a, b)){
    console.log("Please, You check your input values that these must be number value!");
    alert("Mistake input value...");
    continue;
  }
  //https://www.w3schools.com/js/tryit.asp?filename=tryjs_prompt
  switch (process_mark) {
    case "+":
      processresult = a + b;
      break;
    case "-":
      processresult = a - b;
      break;
    case "*":
      processresult = a * b;
      break;
    case "/":
      processresult = a / b;
      break;
    default:
      console.log(
        "Please, you must select ['+','-','*','/'] for four operations in math. "
      );
      break;
  }
  console.log("Operation result: ", processresult);
}
function checknumbers(a, b) {
  a = parseInt(a);
  b = parseInt(b);
  console.log("typeof a: ", typeof a);
  console.log("typeof b: ", typeof b);
  if (typeof a === "number" && typeof b === "number") return true;
  else return false;
}