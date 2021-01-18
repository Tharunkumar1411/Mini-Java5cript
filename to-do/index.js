

//validate a email 
function validate(Email){
   const tst = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

   if(tst.test(Email)){
       return true
   }
  
}


//form submission function
function submiting(){
 var userName = document.getElementById('uname').value;
 var Email = document.getElementById("ename").value;

 if(userName.trim()==""){
    document.getElementById('uname').style.borderColor = "red"
 }
 else if(validate(Email)){
    var data = {"email":Email}
   axios.post("http://localhost:3000/createDatabase",data).then(res => {
      console.log(res.data)
  })

    jwt()
 }else{
    document.getElementById('ename').style.borderColor = "red"
 }
}

//create a form input fields
function formHandle(){
    var user = document.createElement('input');
    user.setAttribute("id","uname");
    user.setAttribute("placeholder","username");
    document.getElementById("user").appendChild(user);

    var email = document.createElement("input");
    email.setAttribute("placeholder","Email");
    email.setAttribute("id","ename");
    document.getElementById("email").appendChild(email);

    var button = document.createElement("input");
    button.setAttribute("type","button"); 
    button.setAttribute("value","submit"); 
    document.getElementById("but").appendChild(button).onclick = function() {submiting()};

}

