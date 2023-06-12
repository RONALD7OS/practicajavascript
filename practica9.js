function calcular() {
    var num = parseInt(document.getElementById(`numero`).value);
    if (num <= 1000) {
        pago = num * 0.85;
        document.write("total a cancelar es "+pago + `<br>`)
    } if(num>1000) {
        pago = num * 0.90;
        document.write("total a cancelar es "+pago + `<br>`)
    }

}