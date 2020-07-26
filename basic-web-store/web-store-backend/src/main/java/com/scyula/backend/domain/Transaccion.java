package com.scyula.backend.domain;


import javax.persistence.*;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Transaccion {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "id")
    private Integer id;

    @OneToOne(fetch = FetchType.EAGER)
    private User user;

    @OneToMany(cascade = CascadeType.ALL, fetch=FetchType.EAGER)
    @JoinColumn(name = "ItemCarro_id")
    private List<ItemCarrito> productList;

    private double montoTotal;

    private Date fecha;

    public Transaccion() {
    }

    public Transaccion(Integer id, User user, List<ItemCarrito> productList, long montoTotal, Date fecha) {
        this.id = id;
        this.user = user;
        this.productList = productList;
        this.montoTotal = montoTotal;
        this.fecha = fecha;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<ItemCarrito> getProductList() {
        return productList;
    }

    public void setProductList(List<ItemCarrito> productList) {
        this.productList = productList;
    }

    public double getMontoTotal() {
        return montoTotal;
    }

    public void setMontoTotal(double montoTotal) {
        this.montoTotal = montoTotal;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    @Override
    public String toString() {
        return "Transaccion{" +
                "id=" + id +
                ", user=" + user.toString() +
                ", productList=" + this.getProducts() +
                ", montoTotal=" + montoTotal +
                ", fecha=" + fecha +
                '}';
    }

    private String getProducts(){
        StringBuilder datos = new StringBuilder("");
        productList.forEach(item -> {datos.append(item.toString());});
        return datos.toString();
    }
}
