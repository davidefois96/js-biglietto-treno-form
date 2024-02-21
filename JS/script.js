const nome = document.querySelector('.nome');
const numeroChilometri = document.querySelector('.numeroChilometri');
const etàPasseggero ;
const prezzoAlChilometro = 0.21 ;
let prezzoTotale;

nome.addEventListener('click',function(){
  nome =nome.value;
})

console.log(nome);

numeroChilometri.addEventListener('click',function(){
  numeroChilometri =numeroChilometri.value;
})

console.log(nome);











// if(etàPasseggero < 18){
//   prezzoTotale= (numeroChilometri*prezzoAlChilometro*0.8)
// }else if(etàPasseggero > 65){
//   prezzoTotale= (numeroChilometri*prezzoAlChilometro*0.6)
// }else {
//   prezzoTotale= (numeroChilometri*prezzoAlChilometro)
// }

// console.log(prezzoTotale);

// document.getElementById('output').innerHTML +=  prezzoTotale.toFixed(2) + '€';