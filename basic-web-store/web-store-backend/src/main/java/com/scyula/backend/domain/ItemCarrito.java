package com.scyula.backend.domain;

import javax.persistence.*;

@Entity
public class ItemCarrito {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "id")
    private Integer id;

    @OneToOne(fetch = FetchType.EAGER)
    private Product producto;

    private double montoTotal;

    private int cantidad;

    public ItemCarrito() {
    }

    public ItemCarrito(Integer id, Product producto, double montoTotal, int cantidad) {
        this.id = id;
        this.producto = producto;
        this.montoTotal = montoTotal;
        this.cantidad = cantidad;
    }

    public Integer getId() {
        return id;
    }

    public Product getProducto() {
        return producto;
    }

    public void setProducto(Product producto) {
        this.producto = producto;
    }

    public double getMontoTotal() {
        return montoTotal;
    }

    public void setMontoTotal(double montoTotal) {
        this.montoTotal = montoTotal;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    @Override
    public String toString() {
        return "ItemCarrito{" +
                "producto=" + producto +
                ", montoTotal=" + montoTotal +
                ", cantidad=" + cantidad +
                '}';
    }
}
