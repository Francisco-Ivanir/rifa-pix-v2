
console.log("Rifa PIX V2 carregada.");

// CONTROLE DOS NÚMEROS
const gradeNumeros = document.getElementById("gradeNumeros");
const quantidadeSelecionada = document.getElementById("quantidadeSelecionada");
const listaSelecionados = document.getElementById("listaSelecionados");

// LISTA DOS NÚMEROS SELECIONADOS
let numerosSelecionados = [];

// LIMITE DE NÚMEROS POR PARTICIPANTE
const LIMITE_NUMEROS = 5;

// VALOR DE CADA NÚMERO
const VALOR_NUMERO = 0.80;

// ELEMENTO DO TOTAL DA COMPRA
const totalCompra = document.getElementById("totalCompra");

// ATUALIZAR PAINEL
function atualizarPainelSelecao() {
  quantidadeSelecionada.textContent = numerosSelecionados.length;

  // CALCULAR O VALOR TOTAL
const total = numerosSelecionados.length * VALOR_NUMERO;

totalCompra.textContent = total.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL"
});
  
  if (numerosSelecionados.length === 0) {
    listaSelecionados.textContent = "Nenhum número selecionado.";
  } else {
    listaSelecionados.textContent = numerosSelecionados.join(", ");
  }
}

// GERAR OS 100 NÚMEROS
for (let i = 1; i <= 100; i++) {
  const numeroFormatado = String(i).padStart(2, "0");

  const numero = document.createElement("div");

  numero.className = "numero";
  numero.textContent = numeroFormatado;
  numero.dataset.numero = numeroFormatado;

  // SELECIONAR OU DESMARCAR
  numero.addEventListener("click", function() {
    const valor = this.dataset.numero;

    if (numerosSelecionados.includes(valor)) {
      numerosSelecionados = numerosSelecionados.filter(
        item => item !== valor
      );

      this.classList.remove("selecionado");

   
} else {

  if (numerosSelecionados.length >= LIMITE_NUMEROS) {
    alert("Você pode selecionar no máximo 5 números por participante.");
    return;
  }

  numerosSelecionados.push(valor);

  this.classList.add("selecionado");
}

    atualizarPainelSelecao();

    console.log("Números selecionados:", numerosSelecionados);
  });

  gradeNumeros.appendChild(numero);
}

// PAINEL INICIAL
atualizarPainelSelecao();
