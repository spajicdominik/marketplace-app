package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dao.CountryRepository;
import com.dspajic.marketplace.entities.Country;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryServiceImpl implements CountryService{

    @Autowired
    CountryRepository repository;

    @Override
    public List<Country> getAllCountrys() {
        return repository.getAllCountrys();
    }

    @Override
    public Country getCountryById(Integer id) {
        return repository.getCountryById(id);
    }

    @Override
    public Integer addCountry(Country entity) {
        return repository.addCountry(entity);
    }

    @Override
    public Integer updateCountry(Country entity) {
        return repository.updateCountry(entity);
    }

    @Override
    public void deleteCountry(Integer id) {
        repository.deleteCountry(id);
    }
}
