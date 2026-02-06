package com.dspajic.marketplace.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "subcategory_item_id")
    private Integer subcategoryItemId;

    public Product() {
    }

    public Product(Integer id, String name, Integer subcategoryItemId) {
        this.id = id;
        this.name = name;
        this.subcategoryItemId = subcategoryItemId;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", subcategoryItemId=" + subcategoryItemId +
                '}';
    }
}