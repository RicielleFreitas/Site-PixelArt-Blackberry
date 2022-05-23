import { PixelArt } from './interfaces/pixel-art.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pixel-art',
  templateUrl: './pixel-art.component.html',
  styleUrls: ['./pixel-art.component.scss']
})
export class PixelArtComponent implements OnInit {

  public pixelArtList: Array<PixelArt> = [
    {
      nome: 'Viking',
      src: './../../../../assets/pixeis/viking.jpeg'
    },
    {
      nome: 'Dragão',
      src: './../../../../assets/pixeis/dragão.jpeg'
    },
    {
      nome: 'Arvore assombrada',
      src: './../../../../assets/pixeis/arvore-assombrada.jpeg'
    },
    {
      nome: 'Clow box',
      src: './../../../../assets/pixeis/clow-box.jpeg'
    },
    {
      nome: 'Cogumelo',
      src: './../../../../assets/pixeis/cogumelo.jpeg'
    },
     {
      nome: 'Lápis',
      src: './../../../../assets/pixeis/lapis.jpeg'
    },
     {
      nome: 'Gamer raiz',
      src: './../../../../assets/pixeis/old-gamer.jpeg'
    },
     {
      nome: 'Viking elder',
      src: './../../../../assets/pixeis/viking-pt.jpeg'
    },
     {
      nome: 'Orc',
      src: './../../../../assets/pixeis/orc.jpeg'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
