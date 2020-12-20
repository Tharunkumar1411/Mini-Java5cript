function resultEncode(rawStr){
    var wordArray = CryptoJS.enc.Utf8.parse(rawStr)
    var result = CryptoJS.enc.Base64.stringify(wordArray)
    return result
}

function resultDecode(encStr){
    var wordArrayEn = CryptoJS.enc.Base64.parse(encStr)
    var resultEn = wordArrayEn.toString(CryptoJS.enc.Utf8)
    return resultEn
}

function jwt(){
    console.log("ji")
    var userDecode = document.getElementById("uname").value;
    var token = resultEncode(userDecode)
    var encode = resultDecode(token)
    console.log(token,encode)
}