//alert(`hola mundo mi nombre es Francis`);
let numeroSecreto=
Math.floor(Math.random()*10)+1;
let numeroUsuario=0;
let numeroIntentos=0;
//let palabraVeces="Vez";
let intentosMaximos=3;
while(numeroUsuario!=numeroSecreto){
     numeroUsuario= prompt("escriba un numero del 1 al 10");
     numeroIntentos=numeroIntentos+1;
        if(numeroUsuario==numeroSecreto){
        alert(`Felicitaciones el numero secreto es: ${numeroUsuario}. lo hiciste en ${numeroIntentos} ${numeroIntentos>1?`veces` :`vez`}`);
        }
        else{
        if(numeroSecreto>numeroUsuario){
            alert("No, el numero es mayor");
        }else{
            alert("No, el numero es menor");
        }
        //palabraVeces="Veces";
        if(numeroIntentos==intentosMaximos){
            alert(`Llegaste al numero maximo de ${intentosMaximos} intentos`);
            break;
        }
    }
}


  
    

   







