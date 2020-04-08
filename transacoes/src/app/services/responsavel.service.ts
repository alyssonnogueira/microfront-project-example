import { Injectable } from '@angular/core';
import { Responsavel } from '../model/responsavel';

@Injectable({
  providedIn: 'root'
})
export class ResponsavelService {

  private key = 'responsaveis';
  private responsaveis: Responsavel[];

  constructor() {
    this.responsaveis = JSON.parse(localStorage.getItem(this.key));
  }

  obterResponsavelPorId(id: number): Responsavel {
    return this.responsaveis.filter(responsavel => responsavel.id === id)[0];
  }

  obterTodosResponsaveis(): Responsavel[] {
    return this.responsaveis;
  }
}
