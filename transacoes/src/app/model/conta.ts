import { Responsavel } from './responsavel';
import { TipoContaEnum } from './tipoConta.enum';
export class Conta {
    id: number;
    nome: string;
    saldo: number;
    saldoOriginal: number;
    responsavel: Responsavel;
    tipoConta: TipoContaEnum;

    constructor(id: number, nome: string, saldoOriginal: number, responsavel: Responsavel, tipoConta: TipoContaEnum) {
        this.id = id;
        this.nome = nome;
        this.saldoOriginal = saldoOriginal;
        this.saldo = saldoOriginal;
        this.responsavel = responsavel;
        this.tipoConta = tipoConta;
    }
}
