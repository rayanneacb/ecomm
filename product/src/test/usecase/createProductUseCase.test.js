import { createProductUseCase } from "../../use-case/createProductUseCase.js"
const produto = {
    usuarioId: "string",
    nome: 'string',
    valor: 'number',
    quantidade: 'number',
    descricao: 'string',
    categoria: 'string',
    caracteristicas: [
        {
            nome: 'string',
            descricao: 'string',
        }
    ],
    imagens: [
        {
            url: 'string',
            descricao: 'string',
        }
    ],
}

const resultado = await createProductUseCase(produto)
console.log (resultado)