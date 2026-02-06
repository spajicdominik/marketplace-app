package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dao.CountyRepository;
import com.dspajic.marketplace.entities.County;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountyServiceImpl implements CountyService{

    @Autowired
    CountyRepository repository;

    @Override
    public List<County> getAllCountys() {
        return repository.getAllCountys();
    }

    @Override
    public County getCountyById(Integer id) {
        return repository.getCountyById(id);
    }

    @Override
    public Integer addCounty(County entity) {
        return repository.addCounty(entity);
    }

    @Override
    public Integer updateCounty(County entity) {
        return repository.updateCounty(entity);
    }

    @Override
    public void deleteCounty(Integer id) {
        repository.deleteCounty(id);
    }
}
