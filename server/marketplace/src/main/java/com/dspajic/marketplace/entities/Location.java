package com.dspajic.marketplace.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "location")
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "location_id")
    private Integer id;

    @Column(name = "city_id")
    private Integer cityId;

    public Location() {
    }

    public Location(Integer id, Integer cityId) {
        this.id = id;
        this.cityId = cityId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getCityId() {
        return cityId;
    }

    public void setCityId(Integer cityId) {
        this.cityId = cityId;
    }

    @Override
    public String toString() {
        return "Location{" +
                "id=" + id +
                ", cityId=" + cityId +
                '}';
    }
}