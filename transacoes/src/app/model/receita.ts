import { Transacao } from './transacao';
import { TipoRendaEnum } from './tipoRenda.enum';
import { Conta } from './conta';
import { Responsavel } from './responsavel';

export class Receita extends Transacao {
    tipoRenda: TipoRendaEnum;

    constructor(id: number, data: Date, valor: number, descricao: string,
                responsavel: Responsavel, conta: Conta, tipoRenda: TipoRendaEnum) {
        super(id, data, valor, descricao, responsavel, conta);
        this.tipoRenda = tipoRenda;
    }

    static jsonToDespesa(json): Receita {
        return new Receita(json.id, json.data, json.valor, json.descricao, json.responsavel, json.conta, json.tipoRenda);
    }
}
