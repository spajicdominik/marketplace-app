package com.dspajic.marketplace.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "subcategory")
public class Subcategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "subcategory_id")
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "category_id")
    private Integer categoryId;

    public Subcategory() {
    }

    public Subcategory(Integer id, String name, Integer categoryId) {
        this.id = id;
        this.name = name;
        this.categoryId = categoryId;
    }

    @Override
    public String toString() {
        return "Subcategory{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", categoryId=" + categoryId +
                '}';
    }
}