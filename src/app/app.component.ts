import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {CommonMessages} from "./components/common-messages";
import {EquationType} from "./components/equation";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public readonly commonMessages: CommonMessages;
  public equationTypes: EquationType[];

  constructor(private _router: Router) {
    this.commonMessages = new CommonMessages;
    this.equationTypes = [
      EquationType.firstOrderODE,
      EquationType.secondOrderODE,
      EquationType.heatEquation,
      EquationType.waveEquation,
    ];
  }

  public getStyleClass(equationType: EquationType): string {
    const path = this._router.url.split('/');
    const currentType = path[path.length - 1]
    return equationType === currentType ? "nav-link active" : "nav-link";
  }

  public getDisplayName(equationType: EquationType): string {
    switch (equationType) {
      case EquationType.firstOrderODE:
        return this.commonMessages.firstOrderODE;
      case EquationType.secondOrderODE:
        return this.commonMessages.secondOrderODE;
      case EquationType.heatEquation:
        return this.commonMessages.heatEquation;
      case EquationType.waveEquation:
        return this.commonMessages.waveEquation;
      default:
        throw new Error("Invalid equation type received");
    }
  }
}
