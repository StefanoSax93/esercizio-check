export class Film {
    id: number
    titolo: string
    regia: string
    anno: number
    trama: string
    copertina: string

    constructor(id: number, titolo: string, regia: string, anno: number, trama: string, copertina: string) {
        this.id = id
        this.titolo = titolo
        this.regia = regia
        this.anno = anno
        this.trama = trama
        this.copertina = copertina
    }
}