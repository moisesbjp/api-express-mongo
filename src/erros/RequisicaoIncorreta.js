import Errobase from "./ErroBase.js";

class RequisicaoIncorreta extends Errobase {
    constructor(mensagem = "Um ou mais dados fornecidos estão incorretos"){
        super(mensagem, 400);
    }
}

export default RequisicaoIncorreta