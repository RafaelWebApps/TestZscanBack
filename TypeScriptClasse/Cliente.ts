import { Endereco } from "./Endereco"

export class Cliente {
    nome: string;
    dataNascimento: Date;
    endereco: Endereco;

    getNome(): string {
        return this.nome;
    }

    getIdade(dataNascimento: string): number {
        this.dataNascimento = new Date(dataNascimento);      
        return this.calculaIdade();
    }

    calculaIdade(): number {
        let hoje = new Date(); 
        let horas = Math.abs(hoje.getTime() - this.dataNascimento.getTime());
        let dias= Math.ceil(horas / (1000 * 3600 * 24));
        let idade = Math.round(dias/365);
        return idade
    }
}

