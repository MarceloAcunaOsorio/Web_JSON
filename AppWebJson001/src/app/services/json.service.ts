import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  httpOptions ={
    headers: new HttpHeaders({
      'content-type':'application/json',
      'Autorization':'Bearer 19bedd23-a0fb-4082-9d83-c241c84d0e8a'
    })
  }



private jsonUrl ='https://console.firebase.google.com/project/json-8e5a0/storage/json-8e5a0.appspot.com/files?hl=es#:~:text=19bedd23%2Da0fb%2D4082%2D9d83%2Dc241c84d0e8a';

private lista:any;

constructor(private http: HttpClient){}

getJsonData(): Observable<any>{
  return this.http.get(this.jsonUrl);
}

MetodoProducto(listaProductos:any){
  console.log(listaProductos);
  this.http.post(this.jsonUrl,listaProductos,this.httpOptions).subscribe(
    response =>{
       console.log('Archvo Json Sobreescrito con con exito',response);
    },
    error =>{
      console.log('Error al sobreescribir el archivo JSON',error);
    }

  )
}
}