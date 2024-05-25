function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = document.getElementById('qtd');

    if(tipo.value == 'pista') {
        comprarPista(qnt.value);
    }
}

function comprarPista(qnt) {
    let qtdPista = document.getElementById('qtd-pista');
    if (qtd > qtdPista.textContent) {
        alert('Quantidade indisponível para tipo pista');
    } else {
        qtdPista = qtdPista - qtd;
        qtdPista.textContent = qtdPista;
        alert('Compra realizado com sucesso!');
    }
}