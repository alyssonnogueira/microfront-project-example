import { Transacao } from './transacao';
import { CategoriaDespesaEnum } from './categoriaDespesa.enum';
import { Responsavel } from './responsavel';
import { Conta } from './conta';

export class Despesa extends Transacao {
    categoria: CategoriaDespesaEnum;

    constructor(id: number, data: Date, valor: number, descricao: string,
                responsavel: Responsavel, conta: Conta, categoria: CategoriaDespesaEnum) {
        super(id, data, valor, descricao, responsavel, conta);
        this.categoria = categoria;
      }

    static jsonToDespesa(json): Despesa {
        return new Despesa(json.id, json.data, json.valor, json.descricao, json.responsavel, json.conta, json.categoria);
    }
}
