import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { initializeApp } from "firebase/app";

@Injectable({
  providedIn: 'root'
})
export class JsonService {
/*
private token = "02b52a81-ff58-4770-8bef-9ec9274ac485";
private JsonUrl = 'https://firebasestorage.googleapis.com/v0/b/json-8e5a0.appspot.com/o/productos.json?alt=media&token=02b52a81-ff58-4770-8bef-9ec9274ac485'


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ${this.token}'
    })
  }


//variable para guardar la lista obtenida del json
private lista:any;




getJsonData(): Observable<any>{
  return this.http.get(this.JsonUrl);
}
*/



  
  private JsonUrl = 'assets/Data/productos.json';
  constructor( private http: HttpClient) { }

  getJsonData(): Observable<any>{
    return this.http.get(this.JsonUrl);
  }

}


