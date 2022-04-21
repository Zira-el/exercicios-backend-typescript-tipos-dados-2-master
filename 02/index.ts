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

const user1 = {
    nome: "teste1",
    email: "teste1@email.com",
    cpf: "12312312312",
    endereco: null
}

const user2 = {
    nome: "teste2",
    email: "teste2@email.com",
    cpf: "12345678901",
    profissao: "Programador",
    endereco: {
        cep: "40123123",
        rua: "teste",
        bairro: "ali na esquina",
        cidade: "de vidro"
    }
}


const register = (user: User): User => {
    const readResponse = JSON.parse(fs.readFileSync('./bd.json'))
    readResponse.push(user)
    fs.writeFileSync('./bd.json', JSON.stringify(readResponse, null, 2));
    return user
}

const read = (): User[] => {
    return JSON.parse(fs.readFileSync('./bd.json'))
}

register(user1)
register(user2)
console.log(read())

export = {}