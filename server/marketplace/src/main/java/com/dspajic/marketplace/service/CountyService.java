package com.dspajic.marketplace.service;

import com.dspajic.marketplace.entities.County;

import java.util.List;

public interface CountyService {
    List<County> getAllCountys();
    County getCountyById(Integer id);
    Integer addCounty(County entity);
    Integer updateCounty(County entity);
    void deleteCounty(Integer id);
}
