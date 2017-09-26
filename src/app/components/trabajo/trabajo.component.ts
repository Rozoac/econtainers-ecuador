import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrabajosService } from '../../service/trabajos.service';

@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.component.html',
  styleUrls: ['./trabajo.component.css']
})
export class TrabajoComponent {

  trabajos:any [] =[];

  constructor(private activateRoute:ActivatedRoute, private _trabajoService:TrabajosService) {

    this.activateRoute.params.subscribe(params =>{
      this.trabajos = this._trabajoService.getTrabajo(params['id']);
   })}

  }
