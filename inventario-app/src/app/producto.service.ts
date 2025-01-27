import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private urlBase = 'http://localhost:8081/inventario-app/productos';

  constructor(private http: HttpClient) {}

  //obtener los productos
  obtenerProductosLista(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.urlBase);
  }
}
