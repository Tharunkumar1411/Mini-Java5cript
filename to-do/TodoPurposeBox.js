

function fetchPurpose(){
    var getToken_fromLocalStorage = localStorage.getItem("token");
    var ema = decodeToken(getToken_fromLocalStorage)
    var data = {"email":ema}
    axios.post("http://localhost:3000/fetchPurpose",data).then(res => {
        console.log(res.data.purpose.length)
       var mainContainer = document.getElementById("listCreate")
      
        for (let index = 0; index < res.data.purpose.length; index++) {
                var btn =  document.createElement("button");
                btn.innerHTML = "click"
                var div = document.createElement("div");
                div.setAttribute("id","divv") 

                div.innerHTML = (index+1)  + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + res.data.purpose[index]+ '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +res.data.submitDate[index]+
                "<br>";
                mainContainer.appendChild(div)
            
        }
        
    })
}