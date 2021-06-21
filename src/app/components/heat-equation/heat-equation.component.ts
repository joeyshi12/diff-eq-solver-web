import {Component} from '@angular/core';
import {SolverService} from "../../services/solver.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EquationType} from "../equation";
import {Observable} from "rxjs";

@Component({
  selector: 'heat-equation',
  templateUrl: './heat-equation.component.html',
  styleUrls: ['./heat-equation.component.less']
})
export class HeatEquationComponent {
  public currentSolution: Observable<any>;
  public formGroup: FormGroup;

  constructor(formBuilder: FormBuilder,
              private _solverService: SolverService) {
    this.formGroup = formBuilder.group({
      alpha: ['', [Validators.required]],
      length: [''],
      timePeriod: [''],
      samples: [''],
      leftBoundaryType: [''],
      leftBoundaryFunction: [''],
      rightBoundaryType: [''],
      rightBoundaryFunction: [''],
      initialCondition: [''],
    })
  }

  async solve(): Promise<void> {
    const equationBody = {
      alpha: this.formGroup.get('alpha')?.value,
      length: this.formGroup.get('length')?.value,
      time_period: this.formGroup.get('timePeriod')?.value,
      samples: this.formGroup.get('samples')?.value,
      boundary: {
        left_condition: {
          type: this.formGroup.get('leftBoundaryType')?.value,
          function: this.formGroup.get('leftBoundaryFunction')?.value
        },
        right_condition: {
          type: this.formGroup.get('rightBoundaryType')?.value,
          function: this.formGroup.get('rightBoundaryFunction')?.value
        }
      },
      initial_condition: this.formGroup.get('initialCondition')?.value
    }
    const solverResponse = await this._solverService.solveEquation(EquationType.heatEquation, equationBody).toPromise();
    if (solverResponse.hasOwnProperty('id')) {
      this.currentSolution = await this._solverService.getSolutionById(solverResponse.id).toPromise();
    } else {
      console.log("failed");
    }
  }


}
