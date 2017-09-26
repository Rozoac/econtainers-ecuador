import { Component, OnInit } from '@angular/core';
import { PortafolioService } from '../../service/portafolio.service';
import { Router } from '@angular/router';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-portafolio-page',
  templateUrl: './portafolio-page.component.html',
  styleUrls: ['./portafolio-page.component.css']
})
export class PortafolioPageComponent implements OnInit {
  // portafolio
contenedores: any[] = [];
   portafolio(){
     let portafolio = document.getElementById('portafolio-e');
     portafolio.classList.add("colorear");
   }
   verContenedor(idx: number): void {
    this.router.navigate(['/contenedor', idx])
  }
  constructor(private _contenedoresService: PortafolioService, private router: Router) { }

  ngOnInit() {


    // service
    this.contenedores = this._contenedoresService.getContenedores();
    // Carousel Auto-Cycle


  }

}
