let result = document.getElementById("result");

// Function to handle keyboard events
document.addEventListener('keydown', function(event) {
    const keyPressed = event.key;
    if (!isNaN(keyPressed) || ['+', '-', '*', '/', '.'].includes(keyPressed)) {
      display(keyPressed);
    } else if (keyPressed === 'Enter') {
      calculate();
    } else if (keyPressed === 'Escape') {
        clearScreen();
    } else {
      alert("Only numbers and operators are allowed");
    }
  });


function display(num){
    result.value += num;
}
function calculate(){
    try{
        result.value = eval(result.value)
    }
    catch(err)
    {
        alert("Invalid expression")
    }
}
function clearScreen(){
    result.value ="";
}
function del(){
    result.value = result.value.slice(0,-1)
}

