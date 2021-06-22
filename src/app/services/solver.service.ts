import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EquationType} from "../components/equation";

@Injectable({
  providedIn: 'root'
})
export class SolverService {
  private _domain: string;

  constructor(private _http: HttpClient) {
    this._domain = "http://0.0.0.0:8080";
  }

  public solveEquation(equationType: EquationType, equationBody: any): Observable<any> {
    return this._http.post(this._domain + "/solve/" + equationType.toString(), equationBody);
  }

  public getAllSolutions(): Observable<any> {
    return this._http.get(this._domain + "/solutions");
  }

  public getSolutionById(id: string): Observable<any> {
    return this._http.get(this._domain + "/solutions/" + id);
  }
}
