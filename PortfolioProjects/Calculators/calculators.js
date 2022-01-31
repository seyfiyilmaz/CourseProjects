function calculate() {
  let process_mark = "";
  let processresult = 0;

  while (true) {
    let a,
      b = 0;
    a = prompt("Enter the first number for four operations in math.", "0");
    process_mark = prompt(
      "Please, you must select ['+','-','*','/'] for four operations in math. ",
      "+"
    );
    b = prompt("Enter the second number for four operations in math.", "0");

    if (a == "q" || b == "q") break;
    else {
      a = parseInt(a);
      b = parseInt(b);
    }
    if (!checknumbers(a, b)) {
      console.log(
        "Please, You check your input values that these must be number value!"
      );
      alert("Mistake input value. \nPlease, You check your input values that these must be number value!");
      continue;
    }

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
        // console.log(
        //   "Please, you must select ['+','-','*','/'] for four operations in math. "
        // );
        alert("Please, you must select ['+','-','*','/'] for four operations in math. ");
        break;
    }
    console.log("Operation result: ", processresult);
  }
}
function checknumbers(a, b) {
  if (isNaN(parseInt(a)) || isNaN(parseInt(b))) return false;
  else if (typeof a === "number" && typeof b === "number") return true;
  else return false;
}
