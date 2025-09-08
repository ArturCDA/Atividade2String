// Função de seta (arrow function) chamada "Vazia"
// Recebe uma string "str" e retorna true se, após remover espaços, ela estiver vazia
const Vazia = str => !str.trim();

// Testes:
console.log(Vazia(''));     // true -> string vazia
console.log(Vazia('   '));  // true -> só espaços em branco (trim remove tudo e sobra '')
console.log(Vazia('abc'));  // false -> contém texto, logo não é vazia