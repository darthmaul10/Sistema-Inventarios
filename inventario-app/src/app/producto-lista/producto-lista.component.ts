import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html',
  styleUrl: './producto-lista.component.css',
})
export class ProductoListaComponent implements OnInit {
  listaProductos: Producto[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    // cargamos los productos
    this.obtenerProductos();
  }

  private obtenerProductos(): void {
    // consumir los datos del observable (suscribirnos)
    this.productoService.obtenerProductosLista().subscribe({
      next: (productos) => {
        this.listaProductos = productos;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
