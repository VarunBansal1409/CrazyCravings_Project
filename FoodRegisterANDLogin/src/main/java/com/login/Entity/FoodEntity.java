package com.login.Entity;

import jakarta.persistence.*;

@Entity
public class FoodEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private double price;
    @Column(columnDefinition = "TEXT")
    @Lob
    private String image;

    public FoodEntity() {
    }

    public FoodEntity(String name, double price, String image) {
        this.name = name;
        this.price = price;
        this.image = image;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Override
    public String toString() {
        return "FoodEntity [id=" + id + ", name=" + name + ", price=" + price + ", image=" + image + "]";
    }

}
