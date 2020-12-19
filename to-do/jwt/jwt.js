function resultDecode(rawStr){
    var wordArray = CryptoJS.enc.Utf8.parse(rawStr)
    var result = CryptoJS.enc.Base64.stringify(wordArray)
    return result
}

function jwt(){
    console.log("ji")
    var userDecode = document.getElementById("uname").value;
    var token = resultDecode(userDecode)
    console.log(token)
}