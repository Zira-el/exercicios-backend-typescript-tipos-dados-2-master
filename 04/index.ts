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

const userAtt = {
    nome: "teste2",
    email: "teste2@email.com",
    cpf: "12345678901",
    profissao: "Programador",
    endereco: {
        cep: "40123123",
        rua: "teste",
        bairro: "ali na esquina",
        cidade: "de vidro",
        complemento: 'blabla'
    }
}


const deleteUser = (cpf: string, newData: User): void => {
    let readResponse = JSON.parse(fs.readFileSync('./bd.json'))
    const find = readResponse.find((user: { cpf: string }): {} => user.cpf === cpf)
    let attDeleteUser: User

    if (find) {
        attDeleteUser = readResponse.filter((user: { cpf: string }): {} => user.cpf !== cpf)
    } else {
        throw new Error("Usuário não encontrado")
    }

    fs.writeFileSync('./bd.json', JSON.stringify(attDeleteUser, null, 2));
    return console.log(find)
}

deleteUser("12345678901", userAtt)

export = {}