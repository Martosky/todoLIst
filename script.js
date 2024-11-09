const button = document.getElementById("add");
const inputval = document.getElementById("text");
const outputelem = document.getElementById("output")

button.addEventListener("click", outputValue);

function outputValue(){
    let regex = /^[a-z][a-z]+/i
   if(inputval.value === "" || regex.test(inputval.value) == false){
    alert("Invalid input")
   }else{
    let li = document.createElement("li");
    li.innerHTML = inputval.value;
    outputelem.appendChild(li)
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

   }
   inputval.value = ""
   saveData()
}

outputValue.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("check")
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
    }
})