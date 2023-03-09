export class Libro {
    id: number
    titolo: string
    autore: string
    anno: number
    trama: string
    copertina: string

    constructor(id: number, titolo: string, autore: string, anno: number, trama: string, copertina: string) {
        this.id = id
        this.titolo = titolo
        this.autore = autore
        this.anno = anno
        this.trama = trama
        this.copertina = copertina
    }
}