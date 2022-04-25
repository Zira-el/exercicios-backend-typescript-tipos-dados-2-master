const fs = require('fs')

type User = {
    nome: string,
    email: string,
    cpf: string,
    profissão?: string,
    endereco: Address | null
}

type Address = {
    cep: string,
    rua: string,
    complemento?: string,
    bairro: string,
    cidade: string
}

const showUser = (profissao: string): User => {
    const readResponse = JSON.parse(fs.readFileSync('./bd.json'))
    const users = readResponse.filter((user: { profissao: string }): {} => user.profissao?.toLowerCase() === profissao.toLowerCase())

    return users
}

console.log(showUser("programador"))

export = {}