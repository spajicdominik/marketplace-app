package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.entities.City;

import java.util.List;

public interface CityRepository {
    List<City> getAllCities();
    City getCityById(Integer id);
    Integer addCity(City entity);
    Integer updateCity(City entity);
    void deleteCity(Integer id);
}
