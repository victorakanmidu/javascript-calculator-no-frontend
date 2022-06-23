let calcOperation = prompt("What operation do you want to perform? \n + \n - \n / \n *");
let firstValue = prompt("Enter your first value:");
let secondValue = prompt("Enter second value:");
 
if(calcOperation == "+"){
    alert("Result = " + firstValue + secondValue);
}else if(calcOperation == "-"){
    alert("Result = " + firstValue - secondValue);
}else if(calcOperation == "/"){
    alert("Result = " + firstValue / secondValue);
}else if(calcOperation == "*"){
    alert("Result = " + firstValue * secondValue);
}else{
    alert("Result = " + firstValue % secondValue);
}

document.write("Refresh to use the calculator again!");