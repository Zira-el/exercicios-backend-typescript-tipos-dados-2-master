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


const showUser = (cpf: string): User => {
    const readResponse = JSON.parse(fs.readFileSync('./bd.json'))
    const find = readResponse.find((user: { cpf: string }): {} => user.cpf === cpf)

    if (!find) {
        throw new Error("Usuário não encontrado");
    }

    return readResponse
}

const attUser = (cpf: string, newData: User): void => {
    let readResponse = JSON.parse(fs.readFileSync('./bd.json'))
    const find = readResponse.find((user: { cpf: string }): {} => user.cpf === cpf)

    if (find) {
        for (let i = 0; i < readResponse.length; i++) {
            if (readResponse[i].cpf === cpf) {
                readResponse[i] = newData
            }
        }
    } else {
        throw new Error("Usuário não encontrado")
    }

    fs.writeFileSync('./bd.json', JSON.stringify(readResponse, null, 2));
}


console.log(showUser("12312312312"))
attUser("12345678901", userAtt)

export = {}