import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ClarityModule} from "@clr/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeatEquationComponent } from './components/heat-equation/heat-equation.component';
import { WaveEquationComponent } from './components/wave-equation/wave-equation.component';
import { FirstOrderOdeComponent } from './components/first-order-ode/first-order-ode.component';
import { SecondOrderOdeComponent } from './components/second-order-ode/second-order-ode.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeatEquationComponent,
    WaveEquationComponent,
    FirstOrderOdeComponent,
    SecondOrderOdeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
