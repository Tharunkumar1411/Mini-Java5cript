
    function calcuLation(){
        var billamount = document.getElementById("bill").value;
        var tipamount  = document.getElementById("tip").value;
        var member  = document.getElementById("Members").value;
        var option = document.getElementById("option").value;

        const tips = option === "%" ? (((tipamount/100)*billamount)/member): tipamount;

        const totalBill = (((billamount/member) + tips))

    

        document.getElementById('tips').innerHTML =`Tip Amount ${tips.toPrecision(4)} \t per head`;
        document.getElementById('total').innerHTML = `Total Amount ${totalBill.toPrecision(4)} \t per head`

}