import {Component} from '@angular/core';
import {SolverService} from "../../services/solver.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EquationType, HeatEquation} from "../equation";
import {SolutionState, SolutionStatus} from "../../services/solution-status";

@Component({
  selector: 'heat-equation',
  templateUrl: './heat-equation.component.html',
  styleUrls: ['./heat-equation.component.less']
})
export class HeatEquationComponent {
  public solutionId: string = "";
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

  public solve(): void {
    this._solverService.solveEquation(EquationType.heatEquation, this._getEquationBody())
      .then((state: SolutionState) => {
        if (state.status == SolutionStatus.success) {
          this.solutionId = state.id;
        }
      });
  }

  public exportSolution(): void {
    this._solverService.exportSolutionById(this.solutionId);
    this.solutionId = "";
  }

  private _getEquationBody(): HeatEquation {
    return {
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
  }
}
