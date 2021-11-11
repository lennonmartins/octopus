let prato = 0;
let tempo = 0;
let final = "\nPrato pronto, bom apetite!!! "
function microondas(prato,tempo=15) {
    if(prato==1)
        {padrao = 10;}
    else if(prato==2)
            {padrao = 8;}
    else if(prato==3)
            { padrao = 15;}
    else if(prato==4)
            { padrao = 12;}
    else if(prato==5)
            { padrao = 8;}
    else {
        return ("Prato inexistente, por favor verifique a opção escolhida!");} 
        
    if(tempo < padrao*2 && tempo >= padrao){
       return ("Prato pronto, bom apetite!!!");}
    else if  (tempo < padrao){
       return ("Tempo insuficiente!" + final);} 
    else if (tempo >= padrao*2 && tempo < padrao*3 ){
       return ("Sua comida queimou!" + final);} 
    else if  (tempo >= padrao*3){
       return ("KABUMM !! Você me explodiu!!" + final);}
}

console.log (microondas(2));