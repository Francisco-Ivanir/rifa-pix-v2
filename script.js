
console.log("Rifa PIX V2 carregada.");

// GRADE DE NÚMEROS
const gradeNumeros = document.getElementById("gradeNumeros");

for (let i = 1; i <= 100; i++) {
  const numero = document.createElement("div");

  numero.className = "numero";
  numero.textContent = String(i).padStart(2, "0");
  numero.dataset.numero = String(i).padStart(2, "0");

  gradeNumeros.appendChild(numero);
}

