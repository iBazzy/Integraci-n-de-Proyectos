import { Component, OnInit } from '@angular/core';
import {ApiZooService} from '../../Servicio/api-zoo.service';


@Component({
  selector: 'app-perfilusuario',
  templateUrl: './perfilusuario.page.html',
  styleUrls: ['./perfilusuario.page.scss'],
})
export class PerfilusuarioPage implements OnInit {

  public usuarioIngresado = this.api.retornarNombre(); 

  constructor(
    private api: ApiZooService
  ) { }
  ngOnInit() {
  }

}
