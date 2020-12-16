function navOnclick(){
    alert("working")
}
function todoPage(){

    document.getElementById("nav").style.visibility="visible";
 
    document.getElementById("navButton").onclick = function() {navOnclick()}
 
    document.getElementById("plus").onclick = function() {plusOnclick()}
 }
 
function plusOnclick() {
    

    document.getElementById("model").style.display = "block";

    var span = document.getElementsByClassName("close")[0];
    span.onclick  = function() {document.getElementById("model").style.display="none"}
    
}



function todolist(){
    document.getElementById("form").style.visibility = "hidden"
    todoPage()
}