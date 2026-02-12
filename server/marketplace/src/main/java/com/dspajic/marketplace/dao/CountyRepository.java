package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.dto.newpost.CountyDto;
import com.dspajic.marketplace.entities.County;

import java.util.List;

public interface CountyRepository {
    List<County> getAllCountys();
    County getCountyById(Integer id);
    Integer addCounty(County entity);
    Integer updateCounty(County entity);
    void deleteCounty(Integer id);

    List<CountyDto> getCountyByCountryId(Integer id);
}
