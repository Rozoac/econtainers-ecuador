import { Component, OnInit } from '@angular/core';
import { Contacto } from '../../models/contacto.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  forma:FormGroup;


  constructor( private http:Http ) {
    this.forma = new FormGroup({
      'nombre': new FormControl('', Validators.required),
      'ciudad': new FormControl('¿Cual es tu ciudad mas cercana?', Validators.required),
      'cel': new FormControl('', [Validators.required, Validators.pattern("[0-9]{1,10}")]),
      'interes': new FormControl('¿En que estas interesado?', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'para': new FormControl('¿Lo quieres para?', Validators.required),
      'mensaje': new FormControl(),
      'captcha': new FormControl('', Validators.required)
    })

  }
  ngOnInit() {
  }

  resolved(captchaResponse: string) {
       console.log(`Resolved captcha with response ${captchaResponse}:`);
   }
   


  guardarCambios() {
    console.log(this.forma);
    console.log(this.forma.value);
    this.forma.reset({
      nombre:"",
      ciudad:"",
      cel:"",
      interes:"",
      email:"",
      para:"",
      mensaje:""
    })

  }

}
