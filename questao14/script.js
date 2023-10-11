//Peça ao usuário para inserir uma senha usando o prompt. Se a senha for "senha123",
//exiba uma mensagem de acesso permitido. Caso contrário, exiba uma mensagem de
//acesso negado

let senha = prompt("Insira uma senha!")

if (senha === "senha123") {
  alert("senha correta!")
} else {
  alert("senha incorreta!")
}