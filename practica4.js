function calcular(){
    var num=parseInt(document.getElementById(`numero`).value);
    let suma=0;
    for(let i=1;i<=num;i++){
     suma+=i;
     document.write(suma+`<br>`)
    }
}