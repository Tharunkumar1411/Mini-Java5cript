function submiting(){
 var userName = document.getElementById('user');

 console.log(userName)
 alert("ji")
}

function formHandle(){
    var user = document.createElement('input');
    user.setAttribute("type","text");
    user.setAttribute("placeholder","username");
    document.getElementById("user").appendChild(user)
  


    var email = document.createElement("input");
    email.setAttribute("type","email");
    email.setAttribute("placeholder","Email");
    document.getElementById("email").appendChild(email);


    var password = document.createElement("input");
    password.setAttribute("type","password");
    password.setAttribute("placeholder","Password");
    document.getElementById("pass").appendChild(password);


    var button = document.createElement("input");
    button.setAttribute("type","button"); 
    button.setAttribute("value","submit"); 
    document.getElementById("but").appendChild(button);

}

