function fetchPurpose() {
    var getToken_fromLocalStorage = localStorage.getItem("token");
    var ema = decodeToken(getToken_fromLocalStorage)
    var data = { "email": ema }
    axios.post("http://localhost:3000/fetchPurpose", data).then(res => {
        console.log(res.data.purpose.length)
        var mainContainer = document.getElementById("listCreate")

        for (let index = 0; index < res.data.purpose.length; index++) {


            var div = document.createElement("p");
            div.setAttribute("id", "divv")
            div.setAttribute("minlength", "20");

            div.innerHTML = (index + 1) + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + res.data.submitDate[index] + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + res.data.purpose[index] + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
                "<br>";

            mainContainer.appendChild(div)

        }

        function clearTodo() {
            const noOfremovedTodo = document.getElementById('clearinput').value;
            var dataforRemoveTodo = {
                Email: decodeToken(localStorage.getItem("token")),
                index: noOfremovedTodo
            }



            axios.put("http://localhost:3000/removeTodo", dataforRemoveTodo).then(response => {
                console.log(response)
            })
        }

        var clearinput = document.createElement("input");
        clearinput.setAttribute("id", "clearinput");
        clearinput.setAttribute("type", "number");

        var btn = document.createElement("button");
        btn.setAttribute("id", "clear")
        btn.setAttribute("type", "submit");
        btn.innerHTML = "clear";

        mainContainer.appendChild(clearinput)
        mainContainer.appendChild(btn)

        document.getElementById("clear").onclick = function() { clearTodo() }

    })
}