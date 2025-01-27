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
  //obtener producto por id
  obtenerProductoPorId(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.urlBase}/${id}`);
  }

  //actualizar producto por id
  actualizarProducto(productoActualizado: Producto): Observable<Producto> {
    return this.http.put<Producto>(
      `${this.urlBase}/${productoActualizado.idProducto}`,
      productoActualizado
    );
  }

  // agregar un nuevo producto
  agregarProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.urlBase, producto);
  }
}
