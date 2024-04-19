let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTela('h1', 'Jogo do número secreto');
    exibirTela('p', 'Escolha um número entre 1 a 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTela('p', 'O número secreto é menor.');
        } else {
            exibirTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    } 
} 

function gerarNumeroAleatorio() {
   let NumeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length;

   if (quantidadeDeElementosNaLista == 10) {
    listaDeNumeroSorteados = [];
   }

   if (listaDeNumeroSorteados.includes(NumeroEscolhido)) {
    return gerarNumeroAleatorio();
   } else {
    listaDeNumeroSorteados.push(NumeroEscolhido);
    console.log(listaDeNumeroSorteados);
    return NumeroEscolhido;
   }
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled0', true)
}
