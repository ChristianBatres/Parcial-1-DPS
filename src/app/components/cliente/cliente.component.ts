import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//  Service 
import { ClienteService } from '../../services/cliente.service';
// Class
import { Cliente } from '../../models/cliente';
// toastr
import { ToastrService } from 'ngx-toastr';
import { count } from 'console';
import { element } from 'protractor';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  contador:number;
  duis=[]
  c:number;
  descuento:number;
  clienteList: Cliente[];
  constructor(
    public clienteService: ClienteService,
    public toastr: ToastrService
  ) { }

  ngOnInit() {
    this.clienteService.getClientes();
    this.resetForm();

    this.contador=0;
    this.c=1;
    this.descuento=0;
  }
  

  // Recibe un formulario del tipo NgForm, lo envia a guardar o actualizar , invocando el servicio Firebase
  // lo termina limpiando resetForm
  onSubmit(clienteForm: NgForm) {

   
    if (clienteForm.value.$key == null){

      
     
     

      for (let i = 0; i < this.duis.length; i++) {
        if (clienteForm.value.dui==this.duis[i]) {
          this.c++;
        }
       }
     
       if (this.c>=2 && this.c<=5) {
        this.descuento=clienteForm.value.costo*0.95
        clienteForm.value.costo=this.descuento;
        this.clienteService.insertCliente(clienteForm.value);
        this.duis.push(clienteForm.value.dui);
        this.contador++;
      } else if(this.c>5) {
        this.descuento=clienteForm.value.costo*0.92
        clienteForm.value.costo=this.descuento;
        this.clienteService.insertCliente(clienteForm.value);
        this.duis.push(clienteForm.value.dui);
        this.contador++;
      }
      else{
        this.clienteService.insertCliente(clienteForm.value);
        this.duis.push(clienteForm.value.dui);
        this.contador++;
      }
      this.c=1;
    }
    else{
      this.clienteService.updateCliente(clienteForm.value);
    }
    this.resetForm(clienteForm);
    this.toastr.success('Operacion Exitosa', 'Registrado!');
  }

  // Para limpiar el formulario
  resetForm(productForm?: NgForm) {
    if (productForm != null)
      productForm.reset();
    this.clienteService.selectedCliente = new Cliente();
  }

}
