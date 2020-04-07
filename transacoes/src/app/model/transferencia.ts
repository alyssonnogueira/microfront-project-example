import { Transacao } from './transacao';
import { Conta } from './conta';
import { Responsavel } from './responsavel';

export class Transferencia extends Transacao {
    contaDestino: Conta;

    constructor(id: number, data: Date, valor: number, descricao: string,
                responsavel: Responsavel, conta: Conta, contaDestino: Conta) {
        super(id, data, valor, descricao, responsavel, conta);
        this.contaDestino = contaDestino;
    }

static jsonToDespesa(json): Transferencia {
return new Transferencia(json.id, json.data, json.valor, json.descricao, json.responsavel, json.conta, json.tipoRenda);
}
}
