import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-appointment',
  templateUrl: './place-appointment.component.html',
  styleUrls: ['./place-appointment.component.css']
})
export class PlaceAppointmentComponent  {

  cool(){

    alert("Successfully Added");

    console.log("fasdf")

  }

  textBoxDisabled=false;
amount:number=0;
weeks:number=1;
pack1:boolean=false;
pack2:boolean=false;
pack3:boolean=false;
toggle(){
  this.textBoxDisabled=false;
  this.amount=400;
  this.pack1=false;
  this.pack3=false;
  this.pack2=true;
}
toggle2(){
  this.textBoxDisabled=true;
  this.amount=500;
  this.pack2=false;
  this.pack3=false;
  this.pack1=true;
}
toggle3(){
  this.textBoxDisabled=false;
  this.amount=300;
  this.pack1=false;
  this.pack2=false;
  this.pack3=true;
}
onKey(event:any)
{
  if(event.target.value=="")
  {
    if(this.pack2==true)
    {
      this.amount=400;
    }else if(this.pack3==true)
    {
      this.amount=300;
    }
    
  }else{
    this.amount=Number(event.target.value) * this.amount;
  }
  
}

}

