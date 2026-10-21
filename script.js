// ----- Carrinho -----
const botoes = document.querySelectorAll(".comprar");
const contador = document.getElementById("contador");
let total = 0;

botoes.forEach(function (botao) {
  botao.addEventListener("click", function () {
    total++;
    contador.textContent = total;
  });
});

// ----- Menu lateral -----
const menu = document.getElementById("menu");
const fundo = document.getElementById("fundo");
const abrir = document.getElementById("abrir-menu");
const fechar = document.getElementById("fechar-menu");
const linksMenu = document.querySelectorAll(".botao-menu");

function abrirMenu() {
  menu.classList.add("aberto");
  fundo.classList.add("ativo");
}

function fecharMenu() {
  menu.classList.remove("aberto");
  fundo.classList.remove("ativo");
}

abrir.addEventListener("click", abrirMenu);
fechar.addEventListener("click", fecharMenu);
fundo.addEventListener("click", fecharMenu);

// Fecha o menu ao clicar num botão
linksMenu.forEach(function (link) {
  link.addEventListener("click", fecharMenu);
});

// Fecha o menu com a tecla Esc
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    fecharMenu();
  }
});