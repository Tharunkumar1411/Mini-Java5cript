
    function calcuLation(){
        var billamount = document.getElementById("bill").value;
        var tipamount  = document.getElementById("tip").value;
        var member  = document.getElementById("Members").value;
        var option = document.getElementById("option").value;

        const tips = option === "%" ? (Math.floor(((tipamount/100)*billamount)/member)): tipamount;
        console.log(tips)
        const totalBill = (Math.floor((billamount/member) + tips))

    

        document.getElementById('tips').innerHTML =`Tip Amount ${tips} \t per head`;
        document.getElementById('total').innerHTML = `Total Amount ${totalBill} \t per head`

}