// Função que verifica se o valor recebido é do tipo string
function isString(value) {
  // Retorna true se o tipo do valor for 'string', caso contrário retorna false
  return typeof value === 'string';
}

// Testes:

console.log(isString('Tranquilo')); // true -> é uma string
console.log(isString(1000));        // false -> é um número 
console.log(isString('Art'));       // true -> é uma string
console.log(isString({Mec}));       // false -> é um objeto