package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dto.newpost.CityDto;
import com.dspajic.marketplace.entities.City;

import java.util.List;

public interface CityService {
    List<City> getAllCitys();
    City getCityById(Integer id);
    Integer addCity(City entity);
    Integer updateCity(City entity);
    void deleteCity(Integer id);

    List<CityDto> getCityByCountyId(Integer id);
}
