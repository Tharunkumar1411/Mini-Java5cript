function navOnclick(){
    alert("working")
}

function listCreation(purpose,time){
    document.getElementById("listCreate").innerHTML = purpose;
   
    let submitDate = new Date().toLocaleDateString();

    var data = {"email":email,"item":purpose,"Endtime":time,"submitDate":submitDate}
        
    axios.post("http://localhost:3000/addData",data).then(res => {
        console.log(res)
    })
}

function plusOnclick() {
    
    document.getElementById("model").style.display = "block";

    var DoneButton = document.getElementById("submit");

    DoneButton.onclick = function() {

        const purposeValue = document.getElementById("modelPurpose").value;
        const EndTime = document.getElementById("EndTime").value;
        document.getElementById("model").style.display="none";

        listCreation(purposeValue,EndTime)
    }

    var span = document.getElementsByClassName("close")[0];
    span.onclick  = function() { document.getElementById("model").style.display="none";}
}




function todoPage(){
    document.getElementById("plus").style.visibility="visible";
    document.getElementById("nav").style.visibility="visible";
    document.getElementById("form").style.visibility="hidden";

 
    document.getElementById("navButton").onclick = function() {navOnclick()}
 
    document.getElementById("plus").onclick = function() {plusOnclick()}
 }


 
function todolist(){
    document.getElementById("form").style.visibility = "hidden"
    todoPage()
}