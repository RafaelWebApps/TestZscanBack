export class Endereco {
    logradouro: string;
    complemento: Date;

    getLogradouro(): string {
        return this.logradouro;
    }

    getComplemento(): string {
        return this.complemento.toString();
    }

    getEnderecoCompleto(): string {
        return `${this.getLogradouro()} ${this.getComplemento()}`
    }
}

