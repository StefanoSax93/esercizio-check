import { Component } from '@angular/core';
import { Libro } from 'src/model/libro';
import { ServizioLibriService } from '../servizio-libri.service';

@Component({
  selector: 'app-lista-libri',
  templateUrl: './lista-libri.component.html',
  styleUrls: ['./lista-libri.component.css']
})
export class ListaLibriComponent {

  ngOnInit() {
    this.getLibro()
  }

  constructor(private servLibri: ServizioLibriService) { }

  listaLibri?: Libro[]
  errorMsg: string = ""
  contenuto: string = ""

  getLibro() {
    this.servLibri.getLibri().subscribe(
      data => this.listaLibri = data,
      error => this.errorMsg = error
    )
  }
}
