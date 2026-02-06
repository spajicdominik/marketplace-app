package com.dspajic.marketplace.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "city")
public class City {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "city_id")
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "county_id")
    private Integer countyId;

    public City() {
    }

    public City(Integer id, String name, Integer countyId) {
        this.id = id;
        this.name = name;
        this.countyId = countyId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getCountyId() {
        return countyId;
    }

    public void setCountyId(Integer countyId) {
        this.countyId = countyId;
    }

    @Override
    public String toString() {
        return "City{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", countyId=" + countyId +
                '}';
    }
}