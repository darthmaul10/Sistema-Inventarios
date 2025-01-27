package omenjivar.inventarios.modelo;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty("idProducto")
    Integer idProducto;

    @JsonProperty("descripcion")
    String descripcion;

    @JsonProperty("precio")
    Double precio;

    @JsonProperty("existencia")
    Integer existencia;

    @Override
    public String toString() {
        return "Producto{" +
                "idProducto=" + idProducto +
                ", descripcion='" + descripcion + '\'' +
                ", precio=" + precio +
                ", existencia=" + existencia +
                '}';
    }
}