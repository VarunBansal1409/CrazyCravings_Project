package com.login.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

import jakarta.persistence.Index;

@Table(name = "partner_entity", indexes = @Index(name = "idx_partner_no", columnList = "partner_no"))
@Entity
public class PartnerEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "partner_id")
    private Integer id;

    @Column(name = "partner_no")
    private String partnerNo;

    @Column(name = "restaurant_name")
    private String restaurantName;

    @Column(name = "name")
    private String name;

    @Column(name = "price")
    private double price;

    @Column(name = "image", columnDefinition = "TEXT")
    @Lob
    private String image;

    public PartnerEntity() {
        super();
        // TODO Auto-generated constructor stub
    }

    public PartnerEntity(Integer id, String partnerNo, String restaurantName, String name, double price, String image) {
        this.id = id;
        this.partnerNo = partnerNo;
        this.restaurantName = restaurantName;
        this.name = name;
        this.price = price;
        this.image = image;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPartnerNo() {
        return partnerNo;
    }

    public void setPartnerNo(String partnerNo) {
        this.partnerNo = partnerNo;
    }

    public String getRestaurantName() {
        return restaurantName;
    }

    public void setRestaurantName(String restaurantName) {
        this.restaurantName = restaurantName;
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
        return "PartnerEntity [id=" + id + ", partnerNo=" + partnerNo + ", restaurantName=" + restaurantName + ", name="
                + name + ", price=" + price + ", image=" + image + "]";
    }
}
