const fs = require('fs')

const read = (): unknown => {
    return JSON.parse(fs.readFileSync('./bd.json'))
}

const write = (data: any, phrase: string): void => {
    data.push(phrase)
    fs.promises.writeFile('./bd.json', JSON.stringify(data, null, 2));
}

const readResponse = read() as string[]

write(readResponse, "teste")

export = {}