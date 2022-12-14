import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  constructor(private http: HttpClient) {}

  getShoppingListItems(): Observable<string[]> {
    return this.http.get<string[]>('/api/shopping-list');
  }
}
