function generateNumber() {

  const numMin = Math.ceil(document.querySelector(".input_min").value);
  const numMax = Math.floor(document.querySelector(".input_max").value);
  
  const result = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
  
  alert("O número sorteado foi: " + result)
}

//mapeando o botao.
const button = document.querySelector(".button");
//criando evento de clique.
button.addEventListener("click", generateNumber);
