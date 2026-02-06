package com.dspajic.marketplace.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "subcategory_item")
public class SubcategoryItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "subcategory_item_id")
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "subcategory_id")
    private Integer subcategoryId;

    public SubcategoryItem() {
    }

    public SubcategoryItem(Integer id, String name, Integer subcategoryId) {
        this.id = id;
        this.name = name;
        this.subcategoryId = subcategoryId;
    }

    @Override
    public String toString() {
        return "SubcategoryItem{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", subcategoryId=" + subcategoryId +
                '}';
    }
}