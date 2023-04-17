import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {Router, ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ApiZooService} from '../../Servicio/api-zoo.service';
import {AnimalID} from '../../Modelos/animales';


@Component({
  selector: 'app-apadrinar',
  templateUrl: './apadrinar.page.html',
  styleUrls: ['./apadrinar.page.scss'],
})
export class ApadrinarPage implements OnInit {

  public idActivo :number =0 ;
  public animalAcitvo !: AnimalID;

  constructor(
    private rutaActiva : ActivatedRoute,
    private api:ApiZooService,
    private http: HttpClient,
    private router : Router,
    private alerta: AlertController
  ) { }

  ngOnInit() {
    this.rutaActiva.paramMap.subscribe(parametros=>{
      
      this.idActivo = +parametros.get('idAnimal')!;
      this.api.obtenerAnimalPorID(this.idActivo)
      .subscribe(datos=>{
        if(datos){
          this.animalAcitvo=datos;
        }
        else{
          this.router.navigate(['listar-admin']);
        }
      })
      
    })

  }


  


}
