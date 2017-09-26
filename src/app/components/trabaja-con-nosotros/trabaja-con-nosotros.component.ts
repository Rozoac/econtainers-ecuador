import { Component, OnInit } from '@angular/core';
import { TrabajosService} from '../../service/trabajos.service';


@Component({
  selector: 'app-trabaja-con-nosotros',
  templateUrl: './trabaja-con-nosotros.component.html',
  styleUrls: ['./trabaja-con-nosotros.component.css']
})
export class TrabajaConNosotrosComponent implements OnInit {

  trabajos:any[] = [];

  constructor( private _trabajosService:TrabajosService) { }

  ngOnInit() {
    // service
    this.trabajos = this._trabajosService.getTrabajos();

  }

}
