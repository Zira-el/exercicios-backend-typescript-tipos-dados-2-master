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

const deleteUser = (cpf: string): void => {
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

deleteUser("12345678901")

export = {}