import { Component, OnInit } from '@angular/core';
import { ContenedoresService } from '../../service/contenedores.service';
import { Router } from '@angular/router';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {
  // portafolio
contenedores: any[] = [];
   portafolio(){
     let portafolio = document.getElementById('portafolio-e');
     portafolio.classList.add("colorear");
   }
   verContenedor(idx: number): void {
    this.router.navigate(['/contenedor', idx])
  }
  constructor(private _contenedoresService: ContenedoresService, private router: Router) { }

  ngOnInit() {


    // service
    this.contenedores = this._contenedoresService.getContenedores();
    // Carousel Auto-Cycle


  }

}
