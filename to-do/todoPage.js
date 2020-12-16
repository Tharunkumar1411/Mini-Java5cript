function navOnclick(){
    alert("working")
}
function todoPage(){

    document.getElementById("nav").style.visibility="visible";
 
    document.getElementById("navButton").onclick = function() {navOnclick()}
 
    document.getElementById("plus").onclick = function() {plusOnclick()}
 }
 
function plusOnclick() {
    var ModelWork = document.createElement("input");
    document.getElementById("modelPurpose").appendChild(ModelWork);
  

    var DeadLine = document.createElement("input");
    DeadLine.setAttribute("type","time");
    document.getElementById("EndTime").appendChild(DeadLine);

    document.getElementById("model").style.display = "block";

    var span = document.getElementsByClassName("close")[0];
    span.onclick  = function() {document.getElementById("model").style.display="none",document.getElementById("modelPurpose").style.display="none"}
    
}



function todolist(){
    document.getElementById("form").style.visibility = "hidden"
    todoPage()
}