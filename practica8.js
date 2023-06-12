function calcular() {
    var num = parseInt(document.getElementById(`numero`).value);
    let contador=0;
    for (let i = 10; i <= num; i++) {
        if (i % 10 === 0) {

            document.write(i+`<br>`);
            contador++;
        }

    }
document.write("hay "+contador+" multiplos de diez.")
}