import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  constructor(private http: HttpClient) {}
  fetchData() {
    return this.http.get<any>('../assets/dummy/dummy.json');
  }
}
