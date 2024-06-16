import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


import { ProductoResponse } from '../interfaces/producto';
import { CategoriaResponse } from '../interfaces/categoria';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }

getListaProductos(){
  return this.http.get<ProductoResponse>("https://www.hostcatedral.com/api/appNoti/public/getCategoriasProductos")
}

getProductosCaterogias(id: string){
  return this.http.get<CategoriaResponse>("https://www.hostcatedral.com/api/appNoti/public/getProductosPorCategoriaID/" + id)
 
}

}
