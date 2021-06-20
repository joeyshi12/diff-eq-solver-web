import {Component, OnInit} from '@angular/core';
import {SolverService} from "../../services/solver.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EquationType} from "../equation";

@Component({
  selector: 'heat-equation',
  templateUrl: './heat-equation.component.html',
  styleUrls: ['./heat-equation.component.less']
})
export class HeatEquationComponent implements OnInit {
  public form: FormGroup;

  constructor(formBuilder: FormBuilder,
              private _solverService: SolverService) {
    this.form = formBuilder.group({
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

  ngOnInit(): void {
  }

  solve(): void {
    const equationBody = {
      alpha: this.form.get('alpha')?.value,
      length: this.form.get('length')?.value,
      time_period: this.form.get('timePeriod')?.value,
      samples: this.form.get('samples')?.value,
      boundary: {
        left_condition: {
          type: this.form.get('leftBoundaryType')?.value,
          function: this.form.get('leftBoundaryFunction')?.value
        },
        right_condition: {
          type: this.form.get('rightBoundaryType')?.value,
          function: this.form.get('rightBoundaryFunction')?.value
        }
      },
      initial_condition: this.form.get('initialCondition')?.value
    }
    this._solverService.solveEquation(EquationType.heatEquation, equationBody).toPromise().then(x => {
      this._solverService.getSolutionById(x['id']).toPromise().then(console.log);
    });
  }

}
