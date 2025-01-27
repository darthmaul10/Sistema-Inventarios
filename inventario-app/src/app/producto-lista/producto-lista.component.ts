import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html',
  styleUrl: './producto-lista.component.css',
})
export class ProductoListaComponent implements OnInit {
  listaProductos: Producto[] = [];

  constructor(
    private productoService: ProductoService,
    private router: Router
  ) {}

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
  editarProducto(id: number): void {
    this.router.navigate(['editar-producto', id]);
  }
}
