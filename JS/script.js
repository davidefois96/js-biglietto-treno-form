const nome = document.querySelector('.nome');
let Nome;
const numeroChilometri = document.querySelector('.numeroChilometri');
let NumeroChilometri;
const etaPasseggero = document.querySelector('.etaPasseggero');
const  prezzoAlChilometro = 0.21 ;
let prezzoTotale ;
let discount;
const discountFirst= 0.8;
const discountSecond= 0.6;
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
let ticket = document.querySelector('.ticket');




btn1.addEventListener('click',function(event){

  event.preventDefault();
  
  Nome= nome.value ;

  NumeroChilometri= numeroChilometri.value ;

  if(isNaN(NumeroChilometri) == false && isNaN(Nome)== true){
  
   console.log(NumeroChilometri, Nome, etaPasseggero);

   if(etaPasseggero.value =='Minorenne'){

     prezzoTotale = (NumeroChilometri*prezzoAlChilometro*0.8);
     discount = 'hai ricevuto il 20% di sconto!';

    }else if(etaPasseggero.value =='Over65' ){

     prezzoTotale = (NumeroChilometri*prezzoAlChilometro*0.6)
     discount = 'hai ricevuto il 40% di sconto!';
   
    }else{

     prezzoTotale = (NumeroChilometri*prezzoAlChilometro);
     discount = 'nessuno sconto applicato';

    }

    console.log(prezzoTotale);

    ticket.classList.remove('d-none')

    document.getElementById('output').innerHTML ='Ciao! ' + Nome + ' ecco il tuo ticket dà ' + prezzoTotale.toFixed(2) + '€ ' + discount;

  }else{

    alert('qualcosa è andato storto')

  }
  
  
})

















