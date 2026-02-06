package com.dspajic.marketplace.service;

import com.dspajic.marketplace.entities.Country;

import java.util.List;

public interface CountryService {
    List<Country> getAllCountrys();
    Country getCountryById(Integer id);
    Integer addCountry(Country entity);
    Integer updateCountry(Country entity);
    void deleteCountry(Integer id);
}
