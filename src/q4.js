// Função que recorta um número específico de caracteres do início de uma string
function RecortarCaracteres(str, cortar) {
  // slice(0, cortar) pega os caracteres do índice 0 até o índice cortar-1
  return str.slice(0, cortar);
}

// Testes:

console.log(RecortarCaracteres("Tony Stark", 3)); 
// "Ton" -> pega os 3 primeiros caracteres do início da string

console.log(RecortarCaracteres("Artur Crispim", 6)); 
// "Artur " -> pega os 6 primeiros caracteres, incluindo o espaço após "Artur"

console.log(RecortarCaracteres("Mark Ruffalo", 3)); 
// "Mar" -> pega os 3 primeiros caracteres do início da string
