import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { PlaceAppointmentComponent } from './place-appointment/place-appointment.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule , Routes } from '@angular/router';


const appRoutes: Routes =[		
  {path:'contact' , component:ContactComponent},
  {path:'footer', component:FooterComponent},
  {path:'home' , component:HomeComponent},
  {path:'placeAppointment', component:PlaceAppointmentComponent},
  {path:'viewAppointment', component:ViewAppointmentComponent},
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewAppointmentComponent,
    PlaceAppointmentComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
