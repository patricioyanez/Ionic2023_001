import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private storage: Storage) { this.storage.create(); }

  // metodos CRUD

  async guardar(llave: string, valor: any)
  {
    await this.storage.set(llave, valor);
  }
  async leer(llave: string)
  {
    return await this.storage.get(llave);
  }

  async eliminar(llave: string)
  {
    return await this.storage.remove(llave);
  }
  async listar()
  {
    let listado:any = [];
    await this.storage.forEach((v,k)=>{ listado.push(v)} );
    return listado;
  }
}
