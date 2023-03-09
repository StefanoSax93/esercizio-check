import { Component } from '@angular/core';
import { Film } from 'src/model/film';
import { ServizioFilmService } from '../servizio-film.service';

@Component({
  selector: 'app-lista-film',
  templateUrl: './lista-film.component.html',
  styleUrls: ['./lista-film.component.css']
})
export class ListaFilmComponent {

  ngOnInit() {
    this.getFilm()
  }

  constructor(private servFilm: ServizioFilmService) { }

  listaFilm?: Film[]
  errorMsg: string = ""
  contenuto: string = ""

  getFilm() {
    this.servFilm.getFilm().subscribe(
      data => this.listaFilm = data,
      error => this.errorMsg = error
    )
  }
}
