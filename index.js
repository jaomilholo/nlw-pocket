const { select } = require('@inquirer/prompts')
 
const start = async() => {
  while(true){

    const opcao = await select({
      message: "Menu >",
      choices: [
        {
          name: "Cadastrar meta",
          value: "cadastrar"
        },
        {
          name: "Listar metas",
          value: "listar"
        },
        {
          name: "Sair",
          value: "sair"
        },
      ]
    })

    switch(opcao) {
      case "cadastrar":
        console.log("vamos cadastrar")
        break
      case "listar":
        console.log("vamos listar")
        break
      case "sair":
        console.log("Até a próxima!")
        return
    }
  }
}
start()

// arrays, objetos
// let metas = [2, "alô"] 
// console.log(metas[1] + ", " +  metas[0])

// let meta = {
//   value: 'Ler um livro por mês',
//   checked: false,
// }
// let metas = [
//   meta,
//   {
//     value: "Caminhar 20 minutos todos os dias",
//     checked: false,
//   }
// ]

// console.log(metas[1].value)

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
