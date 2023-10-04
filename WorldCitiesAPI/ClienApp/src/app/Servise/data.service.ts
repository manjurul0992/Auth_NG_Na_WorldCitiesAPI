import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../Class/city';
import { Countri } from '../Class/countri';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCOUNTRY(): Observable<any> {
    return this.http.get<any>("https://localhost:40443/api/Countries");
  }

  postCOUNTRY(dat: Countri): Observable<Countri> {
    return this.http.post<Countri>("https://localhost:40443/api/Countries", dat)
  }

  deiEmp(id: number): Observable<any> {
    return this.http.delete<any>("https://localhost:40443/api/Countries/" + id);
  }
  upda(dat: Countri): Observable<Countri> {
    return this.http.put<Countri>("https://localhost:40443/api/Countries/dat.id", dat)
  }

  //Clities
  getClities(): Observable<any> {
    return this.http.get<any>("https://localhost:40443/api/Cities");
  }
  deLClities(id: number): Observable<any> {
    return this.http.delete<any>("https://localhost:40443/api/Cities/" + id);
  }
  postCity(dat: City): Observable<City> {
    return this.http.post<City>("https://localhost:40443/api/Cities",dat)
  }
}
