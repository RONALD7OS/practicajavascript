function calcular() {
    var num = parseInt(document.getElementById(`numero`).value);
    let inversion = 0;
    let cantidad = 1000;
    const interes = 0.1;
    for (let i = 1; i <= num; i++) {
        inversion += cantidad;
        inversion += inversion * interes;

    }
    document.write("total de la inverion final despues de : " + num + " años de inversion es " + inversion + "$$")

}