
function funcion1(){
    //a
var texto = document.getElementById("tex1");   
var reconocedorNum=0;  
var reconocedorLet1=0;
var reconocedorLet2=0;
var reconocedorSim=0;
var reconocedorError=1;
var reconocedorError2=0;

for(var i=0; i<=texto.value.length; i++){

    if(texto.value[i]==0 || texto.value[i]==1 ||  texto.value[i]==2 || texto.value[i]==3 || texto.value[i]==4 || texto.value[i]==5 || texto.value[i]==6 || texto.value[i]==7 || texto.value[i]==8 || texto.value[i]==9)
    {
        reconocedorNum=1;
    }

    if(texto.value[0]=="a" || texto.value[0]=="b" || texto.value[0]=="c" || texto.value[0]=="d" || texto.value[0]=="e" || texto.value[0]=="f" || texto.value[0]=="g" || texto.value[0]=="h" || texto.value[0]=="i" || texto.value[0]=="j" || texto.value[0]=="k" || texto.value[0]=="l" || texto.value[0]=="m" || texto.value[0]=="n" || texto.value[0]=="ñ" || texto.value[0]=="o" || texto.value[0]=="p" || texto.value[0]=="q" || texto.value[0]=="r" || texto.value[0]=="s" || texto.value[0]=="t" || texto.value[0]=="u" || texto.value[0]=="v" || texto.value[0]=="w" || texto.value[0]=="x" || texto.value[0]=="y" || texto.value[0]=="z") {
        reconocedorLet1=1;
    }

    if(texto.value[i]=="a" || texto.value[i]=="b" || texto.value[i]=="c" || texto.value[i]=="d" || texto.value[i]=="e" || texto.value[i]=="f" || texto.value[i]=="g" || texto.value[i]=="h" || texto.value[i]=="i" || texto.value[i]=="j" || texto.value[i]=="k" || texto.value[i]=="l" || texto.value[i]=="m" || texto.value[i]=="n" || texto.value[i]=="ñ" || texto.value[i]=="o" || texto.value[i]=="p" || texto.value[i]=="q" || texto.value[i]=="r" || texto.value[i]=="s" || texto.value[i]=="t" || texto.value[i]=="u" || texto.value[i]=="v" || texto.value[i]=="w" || texto.value[i]=="x" || texto.value[i]=="y" || texto.value[i]=="z"){
        reconocedorLet2=1;
}
    
    if(texto.value[i]=="#" || texto.value[i]=="$" || texto.value[i]=="%" ){
        reconocedorSim=1;
    }

    if(texto.value[i]=="." || texto.value[i]=="," || texto.value[i]=="-" || texto.value[i]=="_" || texto.value[i]=="/") {
        reconocedorError2=1;
    }
}

    if(reconocedorLet1 == 1 && reconocedorLet2 == 1 && reconocedorSim == 0 && reconocedorError2==0){
        reconocedorError=0;
        cadena="ID";
        var Palabrasverificadas = document.getElementById("ID");
    }

    if(reconocedorNum == 1 && reconocedorLet2 == 0 && reconocedorSim == 0 && reconocedorError2==0){
        reconocedorError=0;
        cadena="Numero";
        var Palabrasverificadas = document.getElementById("Numero");
    }

    if(reconocedorSim == 1 && reconocedorLet2 == 0 && reconocedorNum == 0 && reconocedorError2==0){
       reconocedorError=0;
        cadena="Simbolo";
        var Palabrasverificadas = document.getElementById("Simbolo");
       
    }

    if(reconocedorError==1  || reconocedorError2==1 )  {
        alert("Error");
        cadena="Error";
        var Palabrasverificadas = document.getElementById("Error");
    }

    Palabrasverificadas.innerHTML =  Palabrasverificadas.innerHTML + "•" + texto.value + "<br>";

}
