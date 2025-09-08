// Função que recebe um nome completo e retorna em formato abreviado
function AbreviarNome(NomeCompleto) {
  // Divide a string em palavras usando o espaço como separador
  const parts = NomeCompleto.split(" ");
  
  // Retorna o primeiro nome + espaço + inicial do sobrenome + ponto
  return parts[0] + " " + parts[1][0] + ".";
}

// Testes:

console.log(AbreviarNome("Robin Hood"));  
// "Robin H." 
console.log(AbreviarNome("Tony Stark"));  
// "Tony S." 
console.log(AbreviarNome("Artur Crispim"));  
// "Artur C." 