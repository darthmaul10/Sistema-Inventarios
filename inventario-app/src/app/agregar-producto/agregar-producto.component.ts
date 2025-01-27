import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.css',
})
export class AgregarProductoComponent {
  producto: Producto = new Producto();

  constructor(
    private productoService: ProductoService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.guardarProducto();
  }

  guardarProducto(): void {
    this.productoService.agregarProducto(this.producto).subscribe({
      next: (nuevoProducto: Producto) => {
        // console.log('nuevoProducto');
        alert(
          `Producto #${nuevoProducto.idProducto} ${nuevoProducto.descripcion} agregado correctamente`
        );
        this.router.navigate(['productos']);
      },
      error: (error: any) => {
        console.log('error al agregar producto: ' + error);
      },
      complete: () => {},
    });
  }
}
