import { IRecipe } from './recipe';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private _url: string = "./assets/data/data.json";

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<IRecipe[]>{
    return this.http.get<IRecipe[]>(this._url);
  }
  
}
