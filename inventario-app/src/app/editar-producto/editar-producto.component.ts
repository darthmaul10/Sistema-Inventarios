import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.css',
})
export class EditarProductoComponent implements OnInit {
  producto: Producto = new Producto();
  id: number;

  constructor(
    private productoService: ProductoService,
    private ruta: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.id = this.ruta.snapshot.params['id'];
    this.obtenerProducto();
  }

  obtenerProducto(): void {
    this.productoService.obtenerProductoPorId(this.id).subscribe({
      next: (producto) => {
        this.producto = producto;
      },
      error: (e) => {
        console.error(`error al obtener producto: ` + e.error.error);
      },
    });
  }

  onSubmit() {
    this.productoService.actualizarProducto(this.producto).subscribe({
      next: (productoActualizado) => {
        alert(
          `Producto #${productoActualizado.idProducto} actualizado correctamente.`
        );
        this.router.navigate(['productos']);
      },
      error: (e) => {
        console.error(e);
      },
    });
  }
}
