import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {timer} from "rxjs";
import {DifferentialEquation, EquationType} from "../components/equation";
import {concatMap, filter, first, take, takeUntil} from "rxjs/operators";
import {SolutionState, SolutionStatus} from "./solution-status";

@Injectable({
  providedIn: 'root'
})
export class SolverService {
  private readonly _context: string;

  constructor(private _http: HttpClient) {
    this._context = "http://0.0.0.0:8080";
  }

  public async solveEquation(equationType: EquationType, equationBody: DifferentialEquation): Promise<SolutionState> {
    const solveResponse: any = await this._http.post(this._context + "/solve/" + equationType.toString(), equationBody).pipe(
      first()
    ).toPromise();

    if (!solveResponse.hasOwnProperty('id')) {
      return {
        status: SolutionStatus.failed,
        id: ""
      }
    }

    const state: any = await timer(0, 1000).pipe(
      concatMap(() => this._http.get(this._context + "/solutions/status/" + solveResponse.id)),
      filter((state: any) => state.status !== SolutionStatus.running),
      take(1),
      takeUntil(timer(10000))
    ).toPromise();

    return {
      status: state.status === 'success' ? SolutionStatus.success : SolutionStatus.failed,
      id: state.id
    };
  }

  public exportSolutionById(id: string): void {
    return window.location.assign(this._context + '/solutions/export/' + id);
  }
}
