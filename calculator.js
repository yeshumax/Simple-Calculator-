const display = document.getElementById("display");
let alreadyCalculated = false;

function appendToDisplay(input){
    if(alreadyCalculated && !isNaN(input)){
        display.value = "";
        alreadyCalculated = false;
    }
    display.value += input;
    alreadyCalculated = false;
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
    alreadyCalculated = true;
}
function clearContents(){
    display.value = " ";
    alreadyCalculated = false;
}
function deleteLast(){
    display.value = display.value.slice(0, -1);
}

