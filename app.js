let titulo = document.querySelector(`h1`);
titulo.innerHTML = `Hora do Desafio!`;

function consoleClick() {
  console.log(`O botão foi clicado!`);
}

function alertClick() {
  alert(`Olá! Tudo bem com você?`);
}

function promptClick() {
  let cidade = prompt(`Diga o nome de uma cidade do Brasil: `);
  alert(`Estive em ${cidade} e lembrei de você.`);
}

function somaClick() {
  let num1 = parseInt(prompt(`Escolha um número: `));
  let num2 = parseInt(prompt(`Escolha outro número: `));
  let soma = num1 + num2;

  alert(`A soma de ambos os números é igual a: ${soma}.`);
}
