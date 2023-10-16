import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {
  private urlBaseAPI = 'https://jsonplaceholder.typicode.com/';
  listado : any = [];
  constructor(private http: HttpClient) { }

  async getUsers()
  {
    const url = this.urlBaseAPI + 'users';
    await this.http.get(url).
        subscribe((data=[]) => {this.listado = data;})
    return this.listado;
  }
  async getUserPosts(id: string)
  {
    this.listado = []; 
    const url = this.urlBaseAPI + 'users/' + id + '/posts';
    await this.http.get(url).
        subscribe((data=[]) => {this.listado = data;})
    return this.listado;
  }
}
