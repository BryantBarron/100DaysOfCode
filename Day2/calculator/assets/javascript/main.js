let buttons = document.getElementsByClassName("btn");
let display = document.getElementById("display");

let operation = " ";
let pi = "";
let num = " ";
let decimal = true;
let negative = 0; 
for(let i = 0; i < buttons.length; i++){
    let button = buttons[i];
    
    button.addEventListener("click", function(){
        if(button.classList.contains("number")){
            num += button.dataset.value;
            operation += button.dataset.value;
            display.innerHTML = num;
        }else if(button.classList.contains("operator")){
            operation += button.dataset.value;
            display.innerHTML = button.dataset.value;
            num = " ";
            decimal = true;
        }else if(button.classList.contains("equals")){
            operation = eval(operation).toString();
            if(operation.length > 11){
                let short = operation.substr(0, 10);
                display.innerHTML = short; 
            }else{
                display.innerHTML = operation; 
            }
            num = " ";
            decimal = true;
        }else if(button.classList.contains("pi")){
            pi += button.dataset.value;
            operation += pi;
            display.innerHTML = eval(pi).toFixed(8);
            num = " ";
        }else if(button.classList.contains("backspace")){
            operation = operation.slice(0, -1);
            display.innerHTML = operation;
            num = " ";
        }else if(button.classList.contains("clear")){
            operation = "";
            display.innerHTML = "";
            num = " ";
            decimal = true;
        }else if(button.classList.contains("decimal")){
            hasDecimal(button);
        }else if(button.classList.contains("negative")){
           
        }
    }); 
}

function hasDecimal(button){
    if(decimal){
        operation += button.dataset.value;
        num += button.dataset.value;
        display.innerHTML = num;
        decimal = false;
    }else{
        decimal = true;
        return;
    }
}