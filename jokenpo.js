pedra = document.getElementById("pedra");
papel = document.getElementById("papel");
tesoura = document.getElementById("tesoura");

let pontuaçãoJogador = 0;
let pontuaçãoMaquina = 0;

function atualizarImagemMaquina(escolha) {
  document.getElementById("interrogacao").src = escolha + ".png";
}

function comparar(jogador, maquina) {
  if (jogador === maquina) {
    document.getElementById("resultado").innerHTML = "Empate!";
  } else if ((jogador === "pedra" && maquina === "tesoura") || (jogador === "papel" && maquina === "pedra") || (jogador === "tesoura" && maquina === "papel")) {
    document.getElementById("resultado").innerHTML = "Você ganhou!";
    pontuaçãoJogador++;
    document.getElementById("pontuacaoJogador").innerHTML = "Pontuação: " + pontuaçãoJogador;
  } else {
    document.getElementById("resultado").innerHTML = "Você perdeu!";
    pontuaçãoMaquina++;
    document.getElementById("pontuacaoMaquina").innerHTML = "Pontuação: " + pontuaçãoMaquina;
  }
}

function escolhaMaquina() {
  const opcoes = ["pedra", "papel", "tesoura"];
  const indice = Math.floor(Math.random() * opcoes.length);
  atualizarImagemMaquina(opcoes[indice]);
  return opcoes[indice];
}

function desativar() {
  const botao = document.querySelectorAll(".opcao");
  botao.forEach((botao) => {
    botao.style.pointerEvents = "none";
    botao.style.opacity = "0.6";

    setTimeout(() => {
      botao.style.pointerEvents = "auto";
      botao.style.opacity = "1";
    }, 1500);
  });
}
//função principal
function escolha(event) {
  document.getElementById("interrogacao").src = "interrogacao.png"; //volta a interrogação
  desativar(); //função para desativar os potões por 1.5 segundos
  const jogador = event.target.id; //coletando o id do  evento que foi passado pelo onclick do html
  document.getElementById("resultado").innerHTML = "A máquina está escolhendo...";
  setTimeout(function () {
    const maquina = escolhaMaquina(); //chamada da função para escolher uma imagem aleátória
    atualizarImagemMaquina(maquina); //chamada da função para imprimir essa imagem escolhida na tela

    comparar(jogador, maquina); //chamada da função para comparar as imagens e adicionar pontos ao ganhador
  }, 1000);
}
