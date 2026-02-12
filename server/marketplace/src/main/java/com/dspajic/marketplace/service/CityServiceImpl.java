package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dao.CityRepository;
import com.dspajic.marketplace.dto.newpost.CityDto;
import com.dspajic.marketplace.entities.City;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CityServiceImpl implements CityService{

    @Autowired
    CityRepository repository;

    @Override
    public List<City> getAllCitys() {
        return repository.getAllCities();
    }

    @Override
    public City getCityById(Integer id) {
        return repository.getCityById(id);
    }

    @Override
    public Integer addCity(City entity) {
        return repository.addCity(entity);
    }

    @Override
    public Integer updateCity(City entity) {
        return repository.updateCity(entity);
    }

    @Override
    public void deleteCity(Integer id) {
        repository.deleteCity(id);
    }

    @Override
    public List<CityDto> getCityByCountyId(Integer id) {
        return repository.getCityByCountyId(id);
    }
}
