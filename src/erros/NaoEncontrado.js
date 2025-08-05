import Errobase from "./ErroBase.js";

class NaoEncontrado extends Errobase{
    constructor(mensagem = "Página não encontrada") {
        super(mensagem, 404)
    }
}

export default NaoEncontrado