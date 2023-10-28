import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {
  private urlBaseAPI = 'https://jsonplaceholder.typicode.com/';
  listado : any = [];
  listado2 : any = [];
  constructor(private http: HttpClient) { }

  getUsers()
  {
    const url = this.urlBaseAPI + 'users';
    this.http.get(url).subscribe((data=[]) => {this.listado = data;})
    return this.listado;
  }
  getUserPosts(id: string)
  {
    this.listado2 = []; 
    const url = this.urlBaseAPI + 'users/' + id + '/posts';
    this.http.get(url).subscribe((data=[]) => {this.listado2 = data;})    

  }

  // npm install -g json-server
  // crear y guardar un archivo con contenido json
  // nombrar el archivo: archivo.json
  // json-server --watch archivo.json
}
