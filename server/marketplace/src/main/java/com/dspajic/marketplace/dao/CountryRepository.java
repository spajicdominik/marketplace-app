package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.entities.Country;

import java.util.List;

public interface CountryRepository {
    List<Country> getAllCountrys();
    Country getCountryById(Integer id);
    Integer addCountry(Country entity);
    Integer updateCountry(Country entity);
    void deleteCountry(Integer id);
}
