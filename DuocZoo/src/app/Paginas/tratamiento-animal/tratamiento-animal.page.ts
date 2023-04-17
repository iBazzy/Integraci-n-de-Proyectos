import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiZooService } from '../../Servicio/api-zoo.service';
import {Animales} from '../../Modelos/animales';

@Component({
  selector: 'app-tratamiento-animal',
  templateUrl: './tratamiento-animal.page.html',
  styleUrls: ['./tratamiento-animal.page.scss'],
})
export class TratamientoAnimalPage implements OnInit {

  public formulario: FormGroup;
  public idActiva = 0;
  public animal !: Animales;


  constructor(
    private router: Router,
    private rutaActiva: ActivatedRoute,
    private api: ApiZooService,
    private formB: FormBuilder,
    private http: HttpClient
  ) {
    this.formulario = this.formB.group({
     
      nombre: ['',[Validators.required]],
      raza:['',[Validators.required]],
      edad: ['',[Validators.required]],
      altura: ['',[Validators.required]],
      peso: ['',[Validators.required]],
      alimentacion: ['',[Validators.required]],
      grupo: ['',[Validators.required]],
      recinto: ['',[Validators.required]],
      observacion: ['',[Validators.required]]

    })
  }



  ngOnInit() {
    this.rutaActiva.paramMap.subscribe(parametros => {
      this.idActiva = +parametros.get('idAnimal')!;
      this.api.obtenerAnimalPorID(this.idActiva)
        .subscribe(animal => {
          if (animal) {
            
            this.animal = animal;
            this.formulario.setValue({
             
              nombre: animal.nombre,
              raza: animal.raza,
              edad: animal.edad,
              altura: animal.altura,
              peso:animal.peso,
              alimentacion:animal.alimentacion,
              grupo:animal.grupo,
              recinto:animal.recinto,
              observacion: '', // valor faltante
            });
           
          }
          else {
            this.router.navigate(['']);
          }
        })
    })
  }

  public tratamiento() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }
    console.log(this.formulario)
    this.api.enviarTratamiento( {
      ...this.formulario.value

    }).subscribe(datos => {
      if (datos) {
        alert('Enviado')
        this.router.navigate(['listar-admin']);
      }
    })
  }

}
