function resultEncode(rawStr){
    var wordArray = CryptoJS.enc.Utf8.parse(rawStr)
    var result = CryptoJS.enc.Base64.stringify(wordArray)
    return result
}


function decodeToken(encStr){
    var wordArray = CryptoJS.enc.Base64.parse(encStr)
    var decodedToken = wordArray.toString(CryptoJS.enc.Utf8)
    return decodedToken;
}

function jwt(){
    var emailHasing = document.getElementById("ename").value;
    var token = resultEncode(emailHasing)
    localStorage.setItem("token",token)
    todoPage()
    
}

function chckingJWT(){
    var getToken_fromLocalStorage = localStorage.getItem("tken");

    if(getToken_fromLocalStorage !== null){
        console.log(getToken_fromLocalStorage)
        var decode = decodeToken(getToken_fromLocalStorage)
        var data = {"email":decode}
        
        axios.post("http://localhost:3000/emailAuthenticate",data).then(res => {
            console.log(res.data)
        })

    }else{
        formHandle()
    }
}