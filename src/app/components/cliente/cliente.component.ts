import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  cliente: any = {}; // Ajusta esto según la estructura real de 'entry'

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.obtenerDatosCliente();
  }

  obtenerDatosCliente(): void {
    this.clienteService.getClientes().subscribe(
      data => {
        console.log('Datos del cliente recibidos:', data);
        if (data && data.length > 0) {
          this.cliente = data[0]; // Asigna el primer elemento a 'cliente'
        } else {
          console.log('No se recibieron datos del cliente.');
        }
      },
      error => {
        console.error('Error al obtener los datos del cliente:', error);
      }
    );
  }
}
