
console.log("Rifa PIX V2 carregada.");

// CONTROLE DOS NÚMEROS
const gradeNumeros = document.getElementById("gradeNumeros");

// Lista dos números selecionados
let numerosSelecionados = [];

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
      numerosSelecionados.push(valor);

      this.classList.add("selecionado");
    }

    console.log("Números selecionados:", numerosSelecionados);
  });

  gradeNumeros.appendChild(numero);
}
