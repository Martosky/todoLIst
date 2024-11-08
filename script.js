const button = document.getElementById("add");
const inputval = document.getElementById("text");
const outputelem = document.getElementById("output")

button.addEventListener("click", outputValue);

function outputValue(){
    let regex = /^[a-z][a-z]+/i
   if(inputval.value === "" || regex.test(inputval.value) == false){
    alert("Invalid input")
   }else{
    
   }
}