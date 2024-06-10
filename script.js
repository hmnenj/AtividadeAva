function dados() {
    let ano = parseFloat(document.getElementById('anoU').value);
 
    if (ano === 2000 || ano === 1996) {
        document.getElementById('medalha').src = "./img/bronze.png";
        document.getElementById("mensagem").innerHTML = `O Brasil foi medalhista olimpico de bronze em: ${ano}`;
    } else if (ano === 2008 || ano === 2012) {
        document.getElementById('medalha').src = "./img/ouro.png";
        document.getElementById("mensagem").innerHTML = `O Brasil foi campeão em: ${ano}`;
    } else if (ano === 2020) {
        document.getElementById('medalha').src = "./img/prata.png";
        document.getElementById("mensagem").innerHTML = `O Brasil foi medalhista olimpico de prata em: ${ano}`;
    } else {
        document.getElementById('medalha').src = "./img/nao.png";
        document.getElementById("mensagem").innerHTML = `O Brasil não foi medalhista olimpico em: ${ano}`;
    }
 
    
}
 