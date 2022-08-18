import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from './types';

@Injectable({
  providedIn: 'root',
})
export class IngredientsService {
  constructor(private http: HttpClient) {}

  getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>('/api/ingredients');
  }

  deleteIngredient(name: string): Observable<Ingredient[]> {
    return this.http.delete<Ingredient[]>(`/api/ingredients/${name}`);
  }

  addIngredients(
    name: string,
    amount: number,
    units: string
  ): Observable<Ingredient[]> {
    const newIngredient = { name: name.toLowerCase(), amount, units };
    return this.http.post<Ingredient[]>('/api/ingredients', newIngredient);
  }
}
