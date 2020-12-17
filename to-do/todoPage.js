function navOnclick(){
    alert("working")
}

 
function plusOnclick() {
    

    document.getElementById("model").style.display = "block";

    var DoneButton = document.getElementById("submit");
    DoneButton.onclick = function() {
        // const purposeValue = document.getElementById("modelPurpose").value;
        // const EndTime = document.getElementById("EndTime").value;
        document.getElementById("model").style.display="none";

    }

    var span = document.getElementsByClassName("close")[0];
    span.onclick  = function() {document.getElementById("model").style.display="none"}
    
}

function todoPage(){

    document.getElementById("nav").style.visibility="visible";
 
    document.getElementById("navButton").onclick = function() {navOnclick()}
 
    document.getElementById("plus").onclick = function() {plusOnclick()}
 }

function todolist(){
    document.getElementById("form").style.visibility = "hidden"
    todoPage()
}