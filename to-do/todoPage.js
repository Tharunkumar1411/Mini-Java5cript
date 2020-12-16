function navOnclick(){
    
}

function todoPage(){

   document.getElementById("nav").style.visibility="visible";

   document.getElementById("navButton").onclick = function() {navOnclick()}
}

function todolist(){
    document.getElementById("form").style.visibility = "hidden"
    todoPage()
}