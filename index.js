// arrays, objetos
let metas = [2, "alô"] 
console.log(metas[1] + ", " +  metas[0])

let meta = {
  value: 'Ler um livro por mês',
  address: 2,
  checked: false,
  log: (info) => {
    console.log(info)
  }
}
meta.value = "não é mais ler um livro"
meta.log(meta.value)

// function   // arrow function
// const criarMeta = () => {}
// function criarMeta() {}

// olá, mundo
// const mensagem = "olá eu"
// {
//   const mensagem = "olá, João!"
//   console.log(mensagem);
// }
// console.log(mensagem);
