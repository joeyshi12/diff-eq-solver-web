import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeatEquationComponent} from "./components/heat-equation/heat-equation.component";
import {WaveEquationComponent} from "./components/wave-equation/wave-equation.component";
import {FirstOrderOdeComponent} from "./components/first-order-ode/first-order-ode.component";
import {SecondOrderOdeComponent} from "./components/second-order-ode/second-order-ode.component";
import {EquationType} from "./components/equation";

const routes: Routes = [
  { path: '', redirectTo: EquationType.firstOrderODE, pathMatch: 'full' },
  { path: EquationType.firstOrderODE, component: FirstOrderOdeComponent },
  { path: EquationType.secondOrderODE, component: SecondOrderOdeComponent },
  { path: EquationType.heatEquation, component: HeatEquationComponent },
  { path: EquationType.waveEquation, component: WaveEquationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
