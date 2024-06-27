let listaDeNumerosSorteados= [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirMensagemInicial();
function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}

function exibirMensagemInicial(){
exibirTextoNaTela('h1', 'Jogo do Numero Secreto 2.0.');
exibirTextoNaTela('p', 'Escolha um Número de 1 a 10.');
}

function verificarChute(){
  let chute = document.querySelector('input').value;
  if (chute == numeroSecreto){
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você Descobriu o Número Secreto com ${tentativas} ${palavraTentativas}.`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
      if (chute > numeroSecreto){
        exibirTextoNaTela('p', `O valor ${chute} é maior.`);
      } else {
        exibirTextoNaTela('p', `O valor ${chute} é menor.`);
      }
      tentativas++;
      limparCampo();
  }
}

function gerarNumeroAleatorio(){
  let numeroEscolhido = Math.round(Math.random() * numeroLimite + 1);
  let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeNumerosNaLista == numeroLimite){
    listaDeNumerosSorteados= [];
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();  
} else {
  listaDeNumerosSorteados.push(numeroEscolhido);  
  console.log(listaDeNumerosSorteados);
  return numeroEscolhido;
}
}

function limparCampo (){
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo(){
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo(); 
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}