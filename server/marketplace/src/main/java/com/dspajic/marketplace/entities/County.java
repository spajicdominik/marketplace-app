package com.dspajic.marketplace.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "county")
public class County {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "county_id")
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "country_id")
    private Integer countryId;

    public County() {
    }

    public County(Integer id, String name, Integer countryId) {
        this.id = id;
        this.name = name;
        this.countryId = countryId;
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

    public Integer getCountryId() {
        return countryId;
    }

    public void setCountryId(Integer countryId) {
        this.countryId = countryId;
    }

    @Override
    public String toString() {
        return "County{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", countryId=" + countryId +
                '}';
    }
}