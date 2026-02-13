let ano = 2020;

if (!(ano % 100)){
    if (!(ano % 400)){
        console.log("O ano não é bissexto");
    }   
    else {
        console.log("O ano é bissexto");    
    }
}
else if (!(ano % 4)){ 
    console.log("O ano é bissexto");
}
else{
    console.log("O ano não é bissexto");
}
