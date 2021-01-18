

function fetchPurpose(){
    var getToken_fromLocalStorage = localStorage.getItem("token");
    var ema = decodeToken(getToken_fromLocalStorage)
    var data = {"email":ema}
    axios.post("http://localhost:3000/fetchPurpose",data).then(res => {
        console.log(res.data)
    })
}