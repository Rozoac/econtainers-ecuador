import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-clientes-p',
  templateUrl: './clientes-p.component.html',
  styleUrls: ['./clientes-p.component.css']
})
export class ClientesPComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

  login(){
    this.auth.login();
  }

}
