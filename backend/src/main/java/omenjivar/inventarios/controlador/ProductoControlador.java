package omenjivar.inventarios.controlador;

import omenjivar.inventarios.excepcion.RecursoNoEncontradoExcepcion;
import omenjivar.inventarios.modelo.Producto;
import omenjivar.inventarios.servicio.ProductoServicio;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("inventario-app")
@CrossOrigin(value = "http://localhost:4200")
public class ProductoControlador {
    private static final Logger logger = LoggerFactory.getLogger(ProductoControlador.class);

    @Autowired
    private ProductoServicio productoServicio;

    //obtener un listado de todos los productos
    @GetMapping("/productos")
    public List<Producto> obtenerProductos(){
        List<Producto> productos = this.productoServicio.listarProductos();
        logger.info("Productos obtenidos:");
        productos.forEach(producto -> logger.info(producto.toString()));
        return productos;
    }
    //agregar un nuevo producto
    @PostMapping("/productos")
    public Producto agregarProducto(@RequestBody Producto producto){
        logger.info("Agregando producto: "+ producto);
        return this.productoServicio.guardarProducto(producto);
    }

    //obtener producto por id
    @GetMapping("/productos/{id}")
    public ResponseEntity<Producto> obtenerProductoPorId(@PathVariable int id){
        Producto producto = this.productoServicio.buscarProductoPorId(id);
        logger.info("Se encontro producto: "+ producto);
        if(producto != null){
            return ResponseEntity.ok(producto);
        }else {
            throw new RecursoNoEncontradoExcepcion("No se encontro el id:"+id);
        }
    }
}
