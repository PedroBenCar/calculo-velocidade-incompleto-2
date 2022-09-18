let arregar = []

function calcular() {
    document.getElementById('quadrado2').innerHTML = "";
    const deslocamento = document.getElementById('a').value;
    const tempo = document.getElementById('b').value;
    let andarfl = parseFloat(deslocamento)
    let passarfl = parseFloat(tempo)
    let velocidade;
    if (deslocamento && tempo) {
        velocidade = andarfl / passarfl
        arregar.push(velocidade);
        document.getElementById('c').value = velocidade

    }
    for (let i in arregar) {
        document.getElementById('quadrado2').innerHTML += arregar[i] + "<br>";
    }
}