import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './panel/panel.component';
import { ServicioService } from './servicio.service';


const routes: Routes = [
  {path:'', component: HomeComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ServicioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
