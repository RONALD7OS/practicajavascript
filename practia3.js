function calcular() {
    var num = parseInt(document.getElementById(`numero`).value);
    for (let i = 0; i <= num; i++) {
        if (i % 2 == 0) {

            document.write(i+`<br>`);
        }

    }
}