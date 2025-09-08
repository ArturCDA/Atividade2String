// Função que divide uma string em um array de palavras
function DividirEConverter(str) {
  // trim() remove espaços no início e no fim da string
  // split(" ") divide a string em um array sempre que encontrar um espaço simples
  return str.split(" ");
}

// Testes:
console.log(DividirEConverter("Artur Crispim"));     
// ["Artur", "Crispim"] -> separou em duas palavras

