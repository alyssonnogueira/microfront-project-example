import { Injectable } from '@angular/core';
import { Responsavel } from '../model/responsavel';

@Injectable({
  providedIn: 'root'
})
export class ResponsavelService {

  private key = 'responsaveis';
  private responsaveis: Responsavel[] = [];

  constructor() {
    this.mockData();
  }

  obterResponsavelPorId(id: number): Responsavel {
    return this.responsaveis.filter(responsavel => responsavel.id === id)[0];
  }

  obterTodosResponsaveis(): Responsavel[] {
    return this.responsaveis;
  }

  salvarResponsavel(responsavel: Responsavel) {
    responsavel.id = this.responsaveis.length + 1;
    this.responsaveis.push(responsavel);
    localStorage.setItem(this.key, JSON.stringify(this.responsaveis));
  }

  lerDoStorage(): Responsavel[] {
    return JSON.parse(localStorage.getItem(this.key)) as Responsavel[];
  }

  mockData() {
    const saveData = this.lerDoStorage();
    if (!saveData) {
      this.responsaveis = [
        new Responsavel(1, 'Alysson'),
        new Responsavel(2, 'Giordana')
      ];
      localStorage.setItem(this.key, JSON.stringify(this.responsaveis));
    } else {
      this.responsaveis = saveData;
    }
  }
}
