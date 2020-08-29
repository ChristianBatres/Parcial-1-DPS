import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sueldos',
  templateUrl: './sueldos.component.html',
  styleUrls: ['./sueldos.component.css']
})
export class SueldosComponent implements OnInit {
  registro=[];
  empleado:any;
  nombre:string;
  sueldo:number;
  isss:number;
  afp:number;
  renta:number;
  sueldoNeto:number;
  contador:number;
   constructor() { }
   ngOnInit() {
   this.sueldo=0;
   this.nombre='';
   this.contador=0;
   }
   ingresar(){
   if(this.sueldo>0 ){
    this.isss=this.sueldo*0.073;
    this.afp=this.sueldo*0.11;
    this.renta=this.sueldo*0.051;
    this.sueldoNeto=this.sueldo-(this.afp+this.isss+this.renta)
    this.empleado={"nombre":this.nombre,"sueldo":this.sueldo,"isss":this.isss,"afp":this.afp, "renta":this.renta,"sueldoNeto":this.sueldoNeto};
    this.registro.push(this.empleado);
    this.contador++;
   }else{

  }

  }

}
