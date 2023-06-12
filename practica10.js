function calcular() {
    var num = parseInt(document.getElementById(`numero`).value);
    let salario =1500;
   for(let i=1;i<=num;i++){
    salario+=salario*0.1;

   }
document.write("el salario despues de seis años es de : "+salario)
   
}