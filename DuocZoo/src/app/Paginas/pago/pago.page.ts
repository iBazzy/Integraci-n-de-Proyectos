import { Component, OnInit } from '@angular/core';
import { ApiZooService } from 'src/app/Servicio/api-zoo.service';
import { Ticket } from '../../Modelos/tickets';
import {HttpClient} from '@angular/common/http';
import {Compra} from '../../Modelos/compra'; 
import {Router} from '@angular/router';


@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
})
export class PagoPage implements OnInit {

  public fechaSeleccionada = "";

  constructor(
    private api:ApiZooService,
    private http:HttpClient,
    private router:Router
  ) { }

  tickets: any[] = [];

  ngOnInit() {
    this.http.get<any>(this.api.urlTickets).subscribe(datos=>{
      this.tickets = datos;
    })
  }

  isWeekday = (dateString: string) => {
    const selectedDate = new Date(dateString);
    const currentDate = new Date();
    
    // Comparar la fecha seleccionada con la fecha actual
    if (selectedDate < currentDate) {
      return false;
    }
  
    const utcDay = selectedDate.getUTCDay();
  
    // Los días domingos estarán deshabilitados
    return utcDay !== 0;
  }

  public usuarioID = this.api.retornarId();

  compraUsuario !: Compra;
  total = 0;

  actualizarTotal() {
    this.total = this.tickets.reduce((total, ticket) =>
      total + ticket.precio * ticket.cantidad
      , 0
    );
  }


  //Muestra en la consola los datos como fecha, tickets y total
  Prueba(){
    const total = this.tickets.reduce((total, ticket) => total + ticket.precio * ticket.cantidad, 0);

    // Crear un objeto con los detalles de la compra
    const detalles = this.tickets.map(ticket => {
      return {
        id: ticket.id,
        nombre: ticket.nombre,
        cantidad: ticket.cantidad,
        subtotal: ticket.cantidad * ticket.precio
      };
    });


    console.log("Total", total);

    console.log("Tickets",detalles);

    console.log("FEcha" , this.fechaSeleccionada);
  }

  guardarCompra() {
    // Calcular el valor total
    const total = this.tickets.reduce((total, ticket) => total + ticket.precio * ticket.cantidad, 0);

    // Crear un objeto con los detalles de la compra
    const detalles = this.tickets.map(ticket => {
      return {
        id: ticket.id,
        nombre: ticket.nombre,
        cantidad: ticket.cantidad,
        subtotal: ticket.cantidad * ticket.precio
      };
    });

    this.api.realizarCompra({
      fecha:this.fechaSeleccionada,
      total: total,
      detalles: detalles,
      idUSuario: this.api.retornarId()
    }).subscribe( ()=> {
      alert("Compra realizada");
      this.router.navigate(['inicio-usuario']);
    });



  }
}
