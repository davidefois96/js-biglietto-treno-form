const nome = document.querySelector('.nome');
let Nome;
const numeroChilometri = document.querySelector('.numeroChilometri');
let NumeroChilometri;
const etàPasseggero = document.querySelector('.etàPasseggero');
let Etàpasseggero 
const  prezzoAlChilometro = 0.21 ;
let prezzoTotale;
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

btn1.addEventListener('click',function(event){

  event.preventDefault();
  Nome= nome.value ;
  NumeroChilometri= numeroChilometri.value ;
  Etàpasseggero= etàPasseggero.value;

  
  console.log(NumeroChilometri, Nome, Etàpasseggero);
  
  
})











// if(etàPasseggero < 18){
//   prezzoTotale= (numeroChilometri*prezzoAlChilometro*0.8)
// }else if(etàPasseggero > 65){
//   prezzoTotale= (numeroChilometri*prezzoAlChilometro*0.6)
// }else {
//   prezzoTotale= (numeroChilometri*prezzoAlChilometro)
// }

// console.log(prezzoTotale);

// document.getElementById('output').innerHTML +=  prezzoTotale.toFixed(2) + '€';