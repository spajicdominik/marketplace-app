package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dao.LocationRepository;
import com.dspajic.marketplace.entities.Location;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationServiceImpl implements LocationService{

    @Autowired
    LocationRepository repository;

    @Override
    public List<Location> getAllLocations() {
        return repository.getAllLocations();
    }

    @Override
    public Location getLocationById(Integer id) {
        return repository.getLocationById(id);
    }

    @Override
    public Integer addLocation(Location entity) {
        return repository.addLocation(entity);
    }

    @Override
    public Integer updateLocation(Location entity) {
        return repository.updateLocation(entity);
    }

    @Override
    public void deleteLocation(Integer id) {
        repository.deleteLocation(id);
    }
}
