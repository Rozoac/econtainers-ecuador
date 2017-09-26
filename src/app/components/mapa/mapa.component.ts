import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  title: string = 'My first AGM project';
  latCali: number = 3.4382475;
  lngCali: number = -76.5304554;
  latCartagena: number = 10.3522594;
  lngCartagena: number = -75.4923761;
  latBogota: number = 4.694814;
  lngBogota: number = -74.063321;
  latManizales: number = 5.068235;
  lngManizales: number = -75.518285;
  latMedellin: number = 6.206960;
  lngMedellin: number = -75.564878;
  zoom: number = 6;
  iconUrl: string = "/assets/imgs/marcador.png";
  scrollwheel: boolean = true;
  isOpen: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
